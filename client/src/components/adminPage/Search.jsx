import React, { useState } from "react";

import axios from "axios";
import PropTypes from "prop-types";

import kebabCase from "lodash.kebabcase";
import { Grid, TextField } from "@material-ui/core";
import { SearchRounded } from "@material-ui/icons";

const Search = ({ displayPoem, updated }) => {
  const [title, setTitle] = useState("");
  const action = "/api/admin/" + kebabCase(title);
  const handleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      const { title, content, image } = await axios
        .get(action)
        .then((response) => response.data)
        .catch((err) => console.log(err));
      displayPoem({
        title: title,
        imageurl: image,
        content: content,
      });
      updated(true);
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <form
      action={action}
      method='GET'
      style={{ margin: "3rem 0 0.5rem" }}
      onSubmit={handleSubmit}>
      <Grid container direction='row' justify='center'>
        <TextField
          id='poem-title'
          label='title'
          color='secondary'
          variant='outlined'
          placeholder='Enter the poem title...'
          onChange={handleChange}
          value={title}
        />
        <button type='submit' className='btn btn-outline-primary'>
          <SearchRounded />
        </button>
      </Grid>
    </form>
    );
};
Search.propTypes = {
    displayPoem: PropTypes.func.isRequired
};
export default Search;
