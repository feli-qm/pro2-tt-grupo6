//importar express y router//
var express = require('express');
var router = express.Router();
const productsController= require("../controllers/productsController");

//crear rutas con sus sufijos//
/* GET products listing. */
router.get('/', productsController.index);
router.get('/add', productsController.add); 

//exportar ruteador//
module.exports = router;