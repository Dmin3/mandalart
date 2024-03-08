const mongoose = require("mongoose");

const boardSchema = new mongoose.Schema({
  main: [],
  children: [[]],
});

module.exports = mongoose.model("Board", boardSchema);
