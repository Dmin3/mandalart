const mongoose = require("mongoose");

function vaildArr(arr) {
  return arr.length <= 9;
}

const message = { message: "크기 9 이상 불가" };

// 자식 Board 스키마 정의
const childBoardSchema = new mongoose.Schema({
  statements: { type: [String], validate: [vaildArr], message },
});

const boardSchema = new mongoose.Schema({
  title: String,
  children: {
    type: [childBoardSchema],
    validate: [vaildArr, message],
  },
});

module.exports = mongoose.model("Board", boardSchema);
