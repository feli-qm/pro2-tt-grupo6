//importar express y router//
var express = require('express');
var router = express.Router();
const productsController= require("../controllers/productsController");

//crear rutas con sus sufijos//
/* GET products listing. */
router.get('/:idProducto', productsController.detalle);
router.get('/add', productsController.add); 

//POST capturar la info del formulario//
router.post("/")

//exportar ruteador//
module.exports = router;