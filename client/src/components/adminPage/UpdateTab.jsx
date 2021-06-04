import React, {useState} from "react";
import Search from "./Search";

import axios from "axios";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";
import PropTypes from "prop-types";

import kebabCase from "lodash.kebabcase";
import {
  TableContainer,
  Table,
  Paper,
  TableBody,
  TableRow,
  TableCell,
  TextField,
  Grid,
} from "@material-ui/core";
import { UpdateRounded } from "@material-ui/icons";

const UpdateTab = ({ setAlert }) => {
    const [isUpdated, setIsUpdated] = useState(false);
    const [poem, setPoem] = useState({
        title: "",
        imageurl: "",
        content: ""
    });
    const { title, imageurl, content } = poem;
    const action = '/api/admin/' + kebabCase(title);
    const handleClick = async () => {
        try {
            const config = {
                headers: {
                    "Content-Type": "application/json",
                },
            };
            const body = JSON.stringify({
                title: title,
                image: imageurl,
                content: content,
            });
            const { msg, type } = await axios
                .patch(action, body, config)
                .then((res) => res.data)
                .catch((err) => console.log(err));
            setAlert(msg, type);
        } catch (err) {
            console.log(err);
        }
    };

    const handleChange = e => {
        const { name, value } = e.target;
        setPoem(prev => {
            return {
                ...prev,
                [name]: value
            }
        });
    };
    return (
      <div>
        <Search displayPoem={setPoem} updated={setIsUpdated} />
        <TableContainer component={Paper}>
          <Table aria-label='simple table'>
            <TableBody>
              <TableRow>
                <TableCell component='th' scope='row'>
                  <p>Title</p>
                </TableCell>
                <TableCell>
                  {isUpdated && (
                    <TextField
                      id='title-update'
                      label='Title'
                      color='secondary'
                      variant='outlined'
                      name='title'
                      defaultValue={poem.title}
                      onChange={handleChange}
                    />
                  )}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component='th' scope='row'>
                  <p>Image Link</p>
                </TableCell>
                <TableCell>
                  {isUpdated && (
                    <TextField
                      id='image-update'
                      label='Image'
                      color='secondary'
                      variant='outlined'
                      name='title'
                      defaultValue={poem.imageurl}
                      onChange={handleChange}
                    />
                  )}
                </TableCell>
              </TableRow>
              <TableRow>
                <TableCell component='th' scope='row'>
                  <p>Content</p>
                </TableCell>
                <TableCell>
                  {isUpdated && (
                    <TextField
                      id='oultined-multiline-static'
                      label='Content'
                      variant='outlined'
                      color='secondary'
                      fullWidth
                      rows={8}
                      style={{ marginBottom: "0.5rem" }}
                      multiline
                      name='content'
                      defaultValue={poem.content}
                      onChange={handleChange}
                    />
                  )}
                </TableCell>
              </TableRow>
            </TableBody>
          </Table>
        </TableContainer>
        <Grid container justify='flex-end'>
          <button
            onClick={handleClick}
            className='btn btn-outline-primary mt-3'>
            Update <UpdateRounded />
          </button>
        </Grid>
      </div>
    );
};
UpdateTab.propTypes = {
  setAlert: PropTypes.func.isRequired,
};
export default connect(null, { setAlert })(UpdateTab);