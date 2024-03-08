const Board = require("../models/Board");

const EMPTY_ARR = new Array(9).fill(null);
const CHILDRENS = Array.from({ length: 8 }, () => EMPTY_ARR);

class BoardService {
  constructor() {}

  async getBoard(boardId) {
    const datas = await Board.findById(boardId);

    return datas;
  }

  async createBoard(body) {
    const { main, children } = body;
    const board = new Board({ main: main, children: children });
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
