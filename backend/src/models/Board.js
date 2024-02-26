const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
  title: String,
});

module.exports = mongoose.model("Title", userSchema);
