const express = require("express");
const router = express.Router();

const Admin = require("../../models/Admin");
const bcrypt = require("bcrypt");
//    api/admin
router.post("/", (req, res) => {
  Admin.findOne({ username: req.body.username }, (err, found) => {
    if (err) {
      res.send({ msg: "Some Error has occured! Try again!", type: "error" });
    } else if (!found) {
      res.send({ msg: "Username doesn't exist!", type: "error" });
    } else {
      bcrypt.compare(req.body.password, found.password, (err, result) => {
        if (result) {
          res.send("Authorised User");
        } else {
          res.send({
            msg: "Invalid Password! Try again!",
            type: "error",
          });
        }
      });
    }
  });
});
module.exports = router;