//importar express y router//
var express = require('express');             //-->es var o let o const??//
var router = express.Router();
//const productsController= require("../controllers/productControllers");

//crear rutas con sus sufijos//
/* GET users listing. */
router.get('/products', function(req, res, next) { //el next va??//
  //aca no va return? (antes de res...)// 
  res.render('products'); 
});

//exportar ruteador//
module.exports = router;
