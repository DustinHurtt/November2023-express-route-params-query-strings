var express = require('express');
var router = express.Router();

/* GET home page. */
router.get("/:bookId/details", (req, res, next) => {
    console.log("req.params -> ", req.params);   
    res.send(req.params);
  });

  

module.exports = router;