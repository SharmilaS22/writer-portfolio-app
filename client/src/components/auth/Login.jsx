import React, { useState } from "react";
import { TextField } from "@material-ui/core";

import { connect } from "react-redux";
import axios from "axios";
import PropTypes from "prop-types";
import {setAlert} from "../../actions/alert";

const Login = ({ setAlert }) => {
  const [user, setUser] = useState({
    username: "",
    password: "",
  });
  const { username, password } = user;
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { msg, type } = await axios
        .post(
          "/api/auth",
          JSON.stringify({
            username: username,
            password: password,
          }),
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        )
        .then((response) => response.data)
            .catch((err) => console.log(err));
        setAlert(msg, type);
    } catch (err) {
      console.log(err);
    }
    };

    const handleChange = (event) => {
        const { name, value } = event.target;
        setUser(prev => {
            return {
                ...prev,
                [name]: value
            };
        });
    };

    return (
      <div style={{ margin: "5rem 0" }}>
        <form action='/api/auth' method='POST' onSubmit={handleSubmit}>
          <h3>Sharon Robert - Portfolio</h3>
          <TextField
            id='username'
            variant='outlined'
            label='Username'
            color='secondary'
            fullwidth
            style={{ margin: "2rem 0 0.8rem" }}
            onChange={handleChange}
            name='username'
            value={user.username}
          />
          <TextField
            id='outlined-password-input'
            variant='outlined'
            label='Password'
            color='secondary'
            type='password'
            fullWidth
            style={{ marginBottom: "0.8rem" }}
            onChange={handleChange}
            name='password'
            value={user.password}
          />
          <button type='submit' className='btn btn-outline-primary mt-3'>
            Login
          </button>
        </form>
      </div>
    );
};
Login.propTypes = {
    setAlert: PropTypes.func.isRequired
}
export default connect(null, {setAlert})(Login);
