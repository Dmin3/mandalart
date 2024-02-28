const router = require("express").Router();
const Board = require("../../models/Board");

router.get("/board/:boardId", async (req, res) => {
  const boardId = req.params.boardId;
  try {
    const datas = await Board.findById(boardId);
    return res.status(200).send(datas);
  } catch (err) {
    return res.status(400).send(err);
  }
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

router.put("/board/:boardId", async (req, res) => {
  try {
    const boardId = req.params.boardId;
    const newDatas = await Board.findByIdAndUpdate(
      boardId,
      { $set: { title: req.body.title } },
      { new: true }
    );
    res.status(201).send(newDatas);
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
