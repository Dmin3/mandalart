const express = require("express");
const mongodbConnection = require("./config/mongodbConfig");
const cors = require("cors");

const app = express();

const port = 5000;

// DB 연결
mongodbConnection();

app.listen(port, () => {
  console.log("Express Server On...");
});

const auth = require("./api/routes/auth");
const mandalart = require("./api/routes/mandalart");

app.use(cors());
app.use(express.json());
app.use("/auth", auth);
app.use("/mandalart", mandalart);
