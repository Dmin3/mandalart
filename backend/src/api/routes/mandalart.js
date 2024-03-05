const router = require("express").Router();

const BoardService = require("../../services/BoardService");
const BoardServiceInstance = new BoardService();

router.get("/board/:boardId", async (req, res) => {
  const boardId = req.params.boardId;

  try {
    const datas = await BoardServiceInstance.getBoard(boardId);
    res.status(200).send(datas);
  } catch (err) {
    console.log(err);
  }
});

router.post("/board", async (req, res) => {
  try {
    const board = await BoardServiceInstance.createBoard(req.body);

    res.status(201).send(board);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.put("/board/:boardId/:num", async (req, res) => {
  // TODO : num에 유효성 검사 넣기
  try {
    const { boardId, num } = req.params;
    const newArr = req.body.children;
    const datas = await BoardServiceInstance.updateBoard(boardId, num, newArr);
    res.status(200).send(datas);
  } catch (err) {
    res.status(400).send(err);
  }
});

router.delete("/board/:boardId/:num", async (req, res) => {
  try {
    const { boardId, num } = req.params;
    await BoardServiceInstance.deleteBoard(boardId, num);

    res.status(200).send({ message: "삭제 완료되었습니다!" });
  } catch (err) {
    res.status(400).send(err);
  }
});

module.exports = router;
