//importar express y router//
var express = require('express');
var router = express.Router();
const productsController = require("../controllers/productsController");

//validations
const { body } = require("express-validator");
let validationsEditYAgregar = [
    body('nombreProducto')
        .notEmpty().withMessage('El campo Nombre del Producto es obligatorio.'),
    body('descProducto')
        .notEmpty().withMessage('El campo Descripción es obligatorio.'),
    body('foto')
        .notEmpty().withMessage('El campo Imagen es obligatorio.')
]

let validationComentario = [
    body("comentario")
        .notEmpty().withMessage('El comentario no puede estar vacio').bail()
        .isLength({ min: 3 }).withMessage('Debe tener al menos 3 caracteres')
];

//crear rutas con sus sufijos//
/* GET products listing. */
router.get('/add', productsController.add);
router.post('/editProduct', productsController.edit)

//POST capturar la info del formulario//
router.post("/")
router.post('/add', validationsEditYAgregar, productsController.store)
router.post('/edit', validationsEditYAgregar, productsController.editForm);
router.post('/delete', productsController.delete);
router.post('/:idProducto', validationComentario, productsController.comment);
router.get('/:idProducto', productsController.detail);

//exportar ruteador//
module.exports = router;