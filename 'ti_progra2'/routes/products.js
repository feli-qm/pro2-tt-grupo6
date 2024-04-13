//importar express y router//
var express = require('express'); //es var o let o const??//
var router = express.Router();

//crear rutas con sus sufijos//
/* GET users listing. */
router.get('/product', function(req, res, next) { //el next va??//
  //aca no va return? (antes de res...)// 
  res.render('product'); 
});

//exportar ruteador//

module.exports = router;
