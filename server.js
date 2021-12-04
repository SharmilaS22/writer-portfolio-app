require("dotenv").config();
const express = require("express");
const bodyParser = require("body-parser");
const path = require("path");
const mongoose = require("mongoose");
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// mongodb atlas connect
const MONGO_URL = process.env.MONGO_URL
mongoose
  .connect(
    MONGO_URL,
    {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      useCreateIndex: true,
      useFindAndModify: true,
    }
  )
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log(err));

//routes connect
app.use("/api/auth", require("./routes/api/auth"));
app.use("/api/client", require("./routes/api/client"));
app.use("/api/admin", require("./routes/api/admin"));
app.use("/api/view", require("./routes/api/view"));

if (process.env.NODE_ENV === 'production') {
  app.use(express.static('client/build'));
  app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
  });
}
app.listen(process.env.PORT || 5000, (req, res) => {
  console.log("Server started at port 5000");
});