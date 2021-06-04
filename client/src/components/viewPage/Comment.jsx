import React, {useState} from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import axios from "axios";
import { Grid, TextField } from "@material-ui/core";
import { Send } from "@material-ui/icons";

const Comment = ({ setAlert, id }) => {
  const [userComment, setUserComment] = useState({
    name: "",
    // email: "",
    commentString: "",
  });
  const { name, commentString } = userComment;
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };
      const body = JSON.stringify({
        commentName: name,
        commentText: commentString,
      });
      const {msg, type} = await axios
        .post(`/api/view/comment/${id}`, body, config)
        .then((response) => response.data)
        .catch((err) => console.log("axios err "+err));
      setAlert(msg, type);
    } catch (err) {
      console.log(err);
    }
  };
  const handleChange = (event) => {
    const { name, value } = event.target;
    setUserComment((prev) => {
      return {
        ...prev,
        [name]: value,
      };
    });
  };
  return (
    <div style={{ margin: "3rem 0" }}>
      <h3 className='text-secondary-theme m-2'>Add a Comment</h3>
      <div className='underline mb-4'></div>
      <form action='' method='POST' onSubmit={handleSubmit}>
        <Grid>
          <TextField
            id='outline-required'
            label='Name'
            color='secondary'
            fullWidth
            required
            variant='outlined'
            style={{ marginBottom: "0.5rem" }}
            onChange={handleChange}
            value={name}
            name='name'
          />
        </Grid>
        {/* <Grid>
          <TextField
            required
            id='outline-required'
            variant='outlined'
            label='email'
            color='secondary'
            fullWidth
            style={{ marginBottom: "0.8rem" }}
            onChange={handleChange}
            value={email}
            name='email'
          />
        </Grid> */}
        <Grid>
          <TextField
            id='oultined-multiline-static'
            label='Comment'
            variant='outlined'
            color='secondary'
            fullWidth
            rows={4}
            style={{ marginBottom: "0.5rem" }}
            multiline
            onChange={handleChange}
            value={userComment.commentString}
            name='commentString'
          />
        </Grid>
        <Grid container justify='flex-end'>
          <button
            className='btn btn-outline-primary mt-3'
                      type='submit'>
                      Submit <Send />
            </button>
        </Grid>
      </form>
    </div>
  );
};
Comment.propTypes = {
    setAlert: PropTypes.func.isRequired
};
export default connect(null, { setAlert })(Comment);