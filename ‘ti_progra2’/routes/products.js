var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/product', function(req, res, next) {
  res.render('product'); 
});

module.exports = router;
