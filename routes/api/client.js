const express = require("express");
const router = express.Router();

const Client = require("../../models/Client");
//    api/client
router
  .get("/", (req, res) => {
    Client.find({}, (err, found) => {
      res.send(found);
    });
  })
  .post("/", (req, res) => {
    const client = new Client({
      name: req.body.name,
      email: req.body.email,
      message: req.body.message,
    });
    client.save((err) => {
      if (!err) {
        res.send({ msg: "Message sent successfully!!", type: "success" });
      } else if (err.code === 11000) {
        res.send({ msg: "Already registered!", type: "error" });
      } else {
        res.send({
          msg: "Some Problem has occured! Try again!",
          type: "error",
        });
      }
    });
  });
module.exports = router;