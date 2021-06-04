import React, { useState } from "react";
import { Paper, Grid, Button } from "@material-ui/core";
import {
  InsertCommentRounded,
  FavoriteBorderRounded,
  FavoriteRounded,
} from "@material-ui/icons";

import axios from "axios";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import { setAlert } from "../../actions/alert";

import CommentBox from "../layout/CommentBox";

const LikeComment = ({ setAlert, likes, comments, id }) => {
  const [liked, setLiked] = useState(false);
  const handleClick = async () => {
    try {
      if (!liked) {
        const { msg, type } = await axios
          .post(`/api/view/like/${id}`)
          .then((response) => response.data)
              .catch((err) => console.log(err));
          setAlert(msg, type);
          if (type === "success") {
              setLiked(true);
          };
      }
    } catch (err) {
      console.log(err);
    }
    };
    return (
      <div className="my-5">
        <Paper elevation={1} style={{ margin: "3rem 0" }}>
          <Grid
            container
            direction='row'
            justify='space-between'
            alignItems='center'>
            <Button
              onClick={handleClick}
              color='secondary'
              aria-label='add to favourites'>
                {liked ? <FavoriteRounded /> : <FavoriteBorderRounded />}
              <h4 style={{ margin: "0 1rem" }}>{likes}</h4>
            </Button>
            <Button>
              <InsertCommentRounded color='secondary' />
              <h4 style={{ margin: "0 1rem" }}>
                {comments && comments.length}
              </h4>
            </Button>
          </Grid>
        </Paper>
        {
          comments && comments.length !== 0 &&
            <div>
              <h3 className="text-secondary-theme">Comments</h3>
              <div className="underline mb-3"></div>
            </div>
        }
        
        {comments &&
          comments.map((comment) => {
            return (
              <CommentBox
                key={comment._id}
                userName={comment.name}
                userComment={comment.text}
                date={comment.date}
              />
            );
          })}
      </div>
    );
};
LikeComment.propTypes = {
    setAlert: PropTypes.func.isRequired
}
export default connect(null, { setAlert })(LikeComment);
