var express = require("express");
var router = express.Router();

router.get("/:username/:city", (req, res) => {
  console.log(req.params);
  res.send(req.params);
});

module.exports = router;
