const {Schema, model} = require("mongoose");
const clientSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  message: {
    type: String,
    required: true,
  },
  date: {
    type: String,
    default: Date.now,
  },
});
module.exports = Client = model("Client", clientSchema);
