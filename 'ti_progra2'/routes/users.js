//importar express y router//
var express = require('express');
var router = express.Router();
//const productController= require("../controllers/usersControllers");

//crear rutas con sus sufijos//
/* GET users listing. */
router.get('/login', function(req, res, next) {
  res.render('login');
});

router.get('/register', function(req, res, next) {
  res.render('register');
});

router.get('/profile', function(req, res, next) {
  res.render('profile');
});

module.exports = router;
