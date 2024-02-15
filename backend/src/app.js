const express = require("express");
const app = express();

const port = 3000;

app.listen(port, () => {
  console.log("Express Server On...");
});

const auth = require("./api/routes/auth");
const mandalart = require("./api/routes/mandalart");

app.use("/auth", auth);
app.use("/mandalart", mandalart);
