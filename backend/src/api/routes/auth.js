const router = require("express").Router();

router.get("/login/:name", (req, res) => {
  const { name } = req.params;
  res.send(`Hello ${name}}`);
});

module.exports = router;
