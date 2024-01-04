var express = require("express");
var router = express.Router();

/* GET home page. */
router.get("/", (req, res, next) => {
  console.log(req.query);
  res.send(req.query);
});

module.exports = router;
