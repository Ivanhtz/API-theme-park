const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const parkSchema = new Schema({
  name: String,
  location: String,
  price: String,
  opening: String,
  description: String,
  image: String,
});

module.exports = mongoose.model("park", parkSchema);
