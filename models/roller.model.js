const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const rollerSchema = new Schema({
  name: String,
  location: String,
  description: String,
  image: String,
});

module.exports = mongoose.model("roller", rollerSchema);
