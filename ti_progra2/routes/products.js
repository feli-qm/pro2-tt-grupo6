//importar express y router//
var express = require('express');             //-->es var o let o const??//
var router = express.Router();
const productsController= require("../controllers/productsController");

//crear rutas con sus sufijos//
/* GET users listing. */
router.get('/', productsController.index);
router.get('/product', productsController.add);     //preguntar en clase si es /product//

//exportar ruteador//
module.exports = router;