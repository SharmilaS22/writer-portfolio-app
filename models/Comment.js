const {Schema, model} = require("mongoose");
const commentSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  text: {
    type: String,
    required: true,
  },
  date: String,
});
module.exports = {
  Comment: model("Comment", commentSchema),
  commentSchema: commentSchema,
};
