const router = require("express").Router();
const Board = require("../../models/Board");

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.post("/board", async (req, res) => {
  try {
    const board = new Board(req.body);
    await board.save();
    res.status(201).send(board);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
