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

let validationComentario = [
    body("comentario")
        .notEmpty().withMessage('El comentario no puede estar vacio').bail()
        .isLength({min:3}).withMessage('Debe tener al menos 3 caracteres')
];

//crear rutas con sus sufijos//
/* GET products listing. */
router.get('/:idProducto', productsController.detail);
router.get('/add', productsController.add); 
router.get('/edit/:idProducto', productsController.edit)
//router.get('/delete', productsController.delete);

//POST capturar la info del formulario//
router.post("/")
<<<<<<< HEAD
router.post('/add', validationsEditYAgregar, productsController.store)
//router.post('/editProduct/:idProducto', productsController.edit)
=======
router.post('/add', productsController.store)
>>>>>>> ad14bf3ce4ef4cd5b9285dc6e5192dbd5db09521
router.post('/edit/:idProducto', validationsEditYAgregar, productsController.editForm);
router.post('/delete', productsController.delete);
router.post('/:idProducto', validationComentario, productsController.comment); 

//exportar ruteador//
module.exports = router;