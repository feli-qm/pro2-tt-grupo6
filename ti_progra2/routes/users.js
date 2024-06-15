//importar express y router//
var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController');

//validaciones PREGUNTAR SI VA ACA O EN ROUTES INDEX (registro)
const {body} = require("express-validator");
let validationsRegister = [
    body("email")
    .notEmpty().withMessage("Debes completar este campo con tu email").bail()
    .isEmail().withMessage("verifica que este email sea valido").bail()
   ,
    body("nombre")
    .notEmpty().withMessage("Debes completar este campo con tu nombre de usuario"),
    body("contrasenia")
    .notEmpty().withMessage("Debes completar este campo con tu contraseña")
    .isLength({min:4}).withMessage("Debes ingresar un minimo de 4 caracteres"),   
]

let validationsLogin = [
    body("email")
    .notEmpty().withMessage("Debes completar este campo con tu email").bail()
    .isEmail().withMessage("verifica que este email sea valido").bail()
   ,
   body("contrasenia")
    .notEmpty().withMessage("Debes completar este campo con tu contraseña")
    .isLength({min:4}).withMessage("Debes ingresar un minimo de 4 caracteres"),   
]

//crear rutas con sus sufijos//
/* GET users listing. */
router.get('/login', usersController.loginGet);
router.get('/register', usersController.register);

router.get('/profile/id/:idUsuario', usersController.profile);
router.get('/edit', usersController.edicionPerfil);

router.post('/login', validationsLogin, usersController.loginPost);
router.post('/register', validationsRegister, usersController.store);
router.post('/logout', usersController.logout)

//exportar ruteador//
module.exports = router;