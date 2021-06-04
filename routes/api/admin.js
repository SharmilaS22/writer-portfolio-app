const express = require("express");
const router = express.Router();

const upperFirst = require("lodash.upperfirst");
const lowerCase = require("lodash.lowercase");
const kebabCase = require("lodash.kebabcase");
const Poem = require("../../models/Poem");
const date = require("../../date.js");
/*--------------------/admin---------------------- */
router
  .get("/", (req, res) => {
    Poem.find({}, (err, found) => {
      if (!err) {
        res.send(found);
      } else {
        res.send(err);
      }
    });
  })
  .post("/", (req, res) => {
    const title = upperFirst(lowerCase(req.body.title));
    Poem.findOne({ title: title }, (err, found) => {
      if (found) {
        res.send({
          msg:
            "Title already exists. Duplicates aren't allowed! Try giving Different Title",
          type: "success",
        });
      } else {
        const poem = new Poem({
          title: title,
          content: req.body.content,
          contentArray: req.body.contentArray,
          image: req.body.image,
          date: date.getToday(),
          // comments: []
        });
        console.log("hello")
        poem.save((err) => {
          if (!err) {
            res.send({ msg: "Added new article.", type: "success" });
          } else {
            res.send({
              msg: "Some problem occured! Try again!",
              type: "error",
            });
          }
        });
      }
    });
  })
  .delete("/", (req, res) => {
    //delete all the works
    Poem.deleteMany({}, (err) => {
      if (!err) {
        res.send("Deletes all the article.");
      } else {
        res.send(err);
      }
    });
  });
/*--------------------/admin/:poemTitle---------------------- */
router
  .get("/:poemTitle", (req, res) => {
    Poem.findOne(
      { title: upperFirst(lowerCase(req.params.poemTitle)) },
      (err, found) => {
        if (!err) {
          res.send(found);
        } else {
          res.send(err);
        }
      }
    );
  })
  .delete("/:poemTitle", (req, res) => {
    const poemTitle = upperFirst(lowerCase(req.params.poemTitle));
    Poem.deleteOne({ title: poemTitle }, (err) => {
      if (!err) {
        res.send({
          msg: "Successfully deleted the '" + poemTitle + "' Post",
          type: "success",
        });
      } else {
        console.log(err);
        res.send({
          msg: "Some error has occured! Try again!",
          type: "error",
        });
      }
    });
  })
  .put("/:poemTitle", (req, res) => {
    Poem.updateOne(
      { title: upperFirst(lowerCase(req.params.poemTitle)) },
      {
        title: req.body.title,
        content: req.body.content,
        imageurl: req.body.imageurl,
        likes: 0,
        comment: [],
      },
      { overwrite: true },
      (err, result) => {
        if (!err) {
          res.send("Successfully updated!");
        } else {
          res.send(err);
        }
      }
    );
  })
  .patch("/:poemTitle", (req, res) => {
    Poem.findOneAndUpdate(
      { title: upperFirst(lowerCase(req.params.poemTitle)) },
      { $set: req.body },
      (err, doc) => {
        if (!err) {
          res.send({
            msg: "Successfully updated the '" + doc.title + "' Post!!",
            type: "success",
          });
        } else {
          res.send({
            msg: "Some error has occured! Try again!",
            type: "error",
          });
        }
      }
    );
  });

module.exports = router;