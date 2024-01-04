var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/:username/books/:bookId', (req, res, next) => {
  console.log("req.params -> ", req.params);  
  
  res.send(req.params);
});

module.exports = router;
