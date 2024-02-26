const mongoose = require("mongoose");

// MongoDB 연결
const mongodbConnection = async () => {
  mongoose
    .connect(
      "mongodb+srv://wlsrlddodua:wlsrlddodua@cluster0.sv5vkfz.mongodb.net/board",
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => console.log("MongoDB에 성공적으로 연결되었습니다."))
    .catch((err) => console.error("MongoDB 연결 실패:", err));
};

module.exports = mongodbConnection;
