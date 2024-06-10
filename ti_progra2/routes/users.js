//importar express y router//
var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController');

//validaciones PREGUNTAR SI VA ACA O EN ROUTES INDEX
const {body} = require("express-validator");
let validations = [
    body("email")
    .notEmpty().withMessage("Debes completar este campo con tu email")
    .isEmail().withMessage("verifica que este email sea valido")
    .custom(function(value){
        db.Usuario.findOne({
            where: {email : value}, 
        })
        .then(function(nombre){
            if(nombre){
                throw new Error("El email ingresado no existe") 
            }
        })
}),
    body("usuario")
    .notEmpty().withMessage("Debes completar este campo con tu nombre de usuario"),
    body("contrasena")
    .notEmpty().withMessage("Debes completar este campo con tu contraseña")
    .isLength({min:4}).withMessage("Debes ingresar un minimo de 4 caracteres"),   
]
router.post("/register", validations, usersController.registro);
//crear rutas con sus sufijos//
/* GET users listing. */
router.get('/login', usersController.ingreso);
router.get('/register', usersController.registro);
router.get('/profile', usersController.perfil);
router.get('/edit', usersController.edicionPerfil);

//exportar ruteador//
module.exports = router;