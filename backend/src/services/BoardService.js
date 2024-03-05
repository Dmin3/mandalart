const Board = require("../models/Board");

const EMPTY_ARR = new Array(9).fill(null);

class BoardService {
  constructor() {}

  async getBoard(boardId) {
    const datas = await Board.findById(boardId);

    return datas;
  }

  async createBoard(boardDto) {
    const board = new Board(boardDto);
    await board.save();

    return board;
  }

  async updateBoard(boardId, num, newArr) {
    const datas = await Board.findById(boardId);
    datas.children[num].statements = newArr;
    const newData = await datas.save();
    return newData;
  }

  async deleteBoard(boardId, num) {
    const datas = await Board.findById(boardId);
    datas.children[num].statements = EMPTY_ARR;
    await datas.save();
  }
}

module.exports = BoardService;
