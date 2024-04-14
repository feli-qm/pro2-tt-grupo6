var express = require('express');
var router = express.Router();
//const productController= require("../controllers/indexControllers");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
  
});

module.exports = router;