import React, { useState } from "react";

import { Grid, TextField } from "@material-ui/core";
import AddRoundedIcon from "@material-ui/icons/AddRounded";

import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";

const AddTab = ({ setAlert }) => {
  const [poem, setPoem] = useState({
    title: "",
    content: "",
    image: "",
    content1: "",
    content2: "",
    content3: "",
    content4: "",
    content5: "",
  });
  const handleChange = async (event) => {
    const { name, value } = event.target;
    setPoem((prevValue) => {
      return {
        ...prevValue,
        [name]: value,
      };
    });
  };
  const { title, content, content1, content2, content3, content4, content5, image } = poem;

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      console.log(event)
      console.log(content)
      const body = JSON.stringify({
        title: title,
        image: image,
        content: content,
        contentArray: [content1, content2, content3, content4, content5]
      });

      const config = {
        headers: {
          "Content-Type": "application/json",
        },
      };

      const { msg, type } = await axios
        .post("/api/admin", body, config)
        .then((response) => response.data)
        .catch((err) => console.log(err));

      setAlert(msg, type);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <form action='/api/admin' method='POST' onSubmit={handleSubmit}>
        <Grid>
          <TextField
            id='outline-required'
            label='Title'
            color='secondary'
            fullWidth
            variant='outlined'
            style={{ margin: "3rem 0 0.5rem" }}
            onChange={handleChange}
            value={poem.title}
            name='title'
          />
        </Grid>
        <Grid>
          <TextField
            id='outline-required'
            variant='outlined'
            label='Image link'
            color='secondary'
            fullWidth
            style={{ marginBottom: "0.8rem" }}
            onChange={handleChange}
            value={poem.image}
            name='image'
          />
        </Grid>

        <Grid>
          <TextField
            id='oultined-multiline-static'
            label='Content'
            variant='outlined'
            color='secondary'
            fullWidth
            rows={8}
            style={{ marginBottom: "0.5rem" }}
            multiline
            onChange={handleChange}
            value={poem.content1}
            name='content1'
          />
          <TextField
            id='oultined-multiline-static'
            label='Content'
            variant='outlined'
            color='secondary'
            fullWidth
            rows={8}
            style={{ marginBottom: "0.5rem" }}
            multiline
            onChange={handleChange}
            value={poem.content2}
            name='content2'
          />
          <TextField
            id='oultined-multiline-static'
            label='Content'
            variant='outlined'
            color='secondary'
            fullWidth
            rows={8}
            style={{ marginBottom: "0.5rem" }}
            multiline
            onChange={handleChange}
            value={poem.content3}
            name='content3'
          />
        </Grid>
        <Grid container justify='flex-end'>
          <button type='submit' className='btn btn-outline-primary mt-3'>
            Add <AddRoundedIcon />
          </button>
        </Grid>
      </form>
    </div>
  );
};
AddTab.propTypes = {
  setAlert: PropTypes.func.isRequired,
};
export default connect(null, { setAlert })(AddTab);
