//importar express y router//
var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController');

//validaciones PREGUNTAR SI VA ACA O EN ROUTES INDEX (registro)
const {body} = require("express-validator");
let validations = [
    body("email")
    .notEmpty().withMessage("Debes completar este campo con tu email").bail()
    .isEmail().withMessage("verifica que este email sea valido").bail()
   ,
    body("usuario")
    .notEmpty().withMessage("Debes completar este campo con tu nombre de usuario"),
    body("contrasena")
    .notEmpty().withMessage("Debes completar este campo con tu contraseña")
    .isLength({min:4}).withMessage("Debes ingresar un minimo de 4 caracteres"),   
]
//crear rutas con sus sufijos//
/* GET users listing. */
router.get('/login', usersController.ingreso);
router.get('/register', usersController.registro);

router.post('/login', usersController.ingreso);
router.post('/register', validations, usersController.store);
router.get('/profile', usersController.perfil);
router.get('/edit', usersController.edicionPerfil);

//exportar ruteador//
module.exports = router;