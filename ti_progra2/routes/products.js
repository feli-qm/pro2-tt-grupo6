//importar express y router//
var express = require('express');
var router = express.Router();
const productsController= require("../controllers/productsController");

//validations
const {body} = require("express-validator");
let validationsEditYAgregar = [
    body('nombreProducto')
        .notEmpty().withMessage('El campo Nombre del Producto es obligatorio.'),
    body('descProducto')
        .notEmpty().withMessage('El campo Descripción es obligatorio.'),
    body('foto')
        .notEmpty().withMessage('El campo Imagen es obligatorio.').bail()
        .isURL().withMessage('El campo Imagen debe ser una URL válida.')  
]


//crear rutas con sus sufijos//
/* GET products listing. */
router.get('/:idProducto', productsController.detail);
router.get('/add/:id', productsController.add); 

//POST capturar la info del formulario//
router.post("/")
router.post('/add', productsController.store)
router.post('/editProduct', productsController.editForm)
router.post('/edit', validationsEditYAgregar, productsController.edit);
router.post('/delete', productsController.delete);

//exportar ruteador//
module.exports = router;