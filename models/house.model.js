const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const houseSchema = new Schema({
  name: String,
  location: String,
  description: String,
  image: String,
});

module.exports = mongoose.model("house", houseSchema);
