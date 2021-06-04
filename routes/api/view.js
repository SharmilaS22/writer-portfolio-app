const express = require("express");
const router = express.Router();
const kebabCase = require("lodash.kebabcase");
const upperFirst = require("lodash.upperfirst");
const lowerCase = require("lodash.lowercase");

const Poem = require("../../models/Poem");
const { Comment } = require("../../models/Comment");
const date = require("../../date.js");
/* ------------------- api/view --------------------- */
router.get("/", (req, res) => {
  res.send("view page route");
});
/* ----------------to view a specific work---------------------- */
router
  .get("/:id", (req, res) => {
    console.log(upperFirst(lowerCase(req.params.poemTitle)));
    //display the work
    Poem.findOne({ _id: req.params.id }, (err, found) => {
      if (!err) {
        res.send(found);
      } else {
        res.send(err);
      }
    });
  })
  .post("/:poemTitle", (req, res) => {
    //no such page
  });
/* -------------  /like/:id ----------- */
router.post("/like/:id", (req, res) => {
  Poem.findOneAndUpdate(
    { _id: req.params.id },
    { $inc: { likes: 1 } },
    (err, found) => {
      if (!err) {
        res.send({ msg: "Liked the post", type: "success" });
      } else {
        console.log(err);
        res.send({ msg: "Some error has occured! Try again", type: "error" });
      }
    }
  );
});
/* -------------  /comment/:id ----------- */
router.post("/comment/:id", (req, res) => {
  const aComment = new Comment({
    name: req.body.commentName,
    text: req.body.commentText,
    date: date.getToday(),
  });
  aComment.save();
  Poem.findOneAndUpdate(
    { _id: req.params.id },
    { $push: { comments: aComment } },
    (err, found) => {
      if (!err) {
        res.send({ msg: "Added comment successfully", type: "success" });
      } else {
        console.log(err);
        res.send({ msg: "Some error has occured! Try again", type: "error" });
      }
    }
  );
});
module.exports = router;
