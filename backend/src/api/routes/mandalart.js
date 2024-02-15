const router = require("express").Router();

router.get("/", (req, res) => {
  res.send("Hello World!");
});

router.get("/home", (req, res) => {
  res.send("Hello Home!");
});

module.exports = router;
