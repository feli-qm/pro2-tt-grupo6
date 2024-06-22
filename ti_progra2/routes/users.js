//importar express y router//
var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController');
const db = require('../database/models');
const bycrypt = require("bcryptjs");
const session = require('express-session');

//validaciones PREGUNTAR SI VA ACA O EN ROUTES INDEX (registro)
const {body} = require("express-validator");
let validationsRegister = [
    body("email")
    .notEmpty().withMessage("Debes completar este campo con tu email").bail()
    .isEmail().withMessage("Verifica que este email sea valido")
    .custom(function(value,{req}){
        return db.Usuario.findOne({where: {email: req.body.email}})
        .then(function(user){
            if (user == undefined){
                return true;
            }
            else{
                throw new Error ("El email ya existe")
            }
        })
        
    }    
    ),
    body("nombre")
    .notEmpty().withMessage("Debes completar este campo con tu nombre de usuario"),
    body("contrasenia")
    .notEmpty().withMessage("Debes completar este campo con tu contraseña").bail()
    .isLength({min:4}).withMessage("Debes ingresar un minimo de 4 caracteres"),   
]

let validationsLogin = [
    body("email")
    .notEmpty().withMessage("Debes completar este campo con tu email").bail()
    .isEmail().withMessage("verifica que este email sea valido").bail()
    .custom(function(value, {req}){
    return db.Usuario.findOne({where: {email: req.body.email}})
    .then(function(usuario){
        if (usuario != undefined){
            return true;
        }
        else{
            throw new Error ("El email no existe")
        }
    })
    
}    
)
   ,
   body("contrasenia")
    .notEmpty().withMessage("Debes completar este campo con tu contraseña").bail()
    .custom(function(value, {req}){
        return db.Usuario.findOne({where: {email: req.body.email},})
        .then(function(resultados){
            if (resultados != undefined){
                let revision = bycrypt.compareSync(req.body.contrasenia, resultados.contrasenia);
                if (!revision){
                    throw new Error ("La contraseña no es correcta")
                }
            }else{
                throw new Error ("No existe el email, por favor registrese")
            }
        })  
    })
]

let valdiationsEdit = [
    body("email")
    .notEmpty().withMessage("El campo email es obligatorio.").bail()
    .isEmail().withMessage("Debe ser valido").bail(),

    body("nombre")
    .notEmpty().withMessage("Debes introducir en este campo  tu nombre de usuario"),
    body("contrasenia")
    .notEmpty().withMessage("Este campo es obligatorio").bail()
    .isLength({min:4}).withMessage("Debes ingresar un minimo de 4 caracteres"),  
]

//crear rutas con sus sufijos//
/* GET users listing. */
router.get('/login', usersController.loginGet);
router.get('/register', usersController.register);

router.get('/profile/:idUsuario', usersController.profile);
router.get('/edit', usersController.editProfile);

router.post('/login', validationsLogin, usersController.loginPost);
router.post('/register', validationsRegister, usersController.store);
router.post('/logout', usersController.logout);
router.post('/edit', valdiationsEdit, usersController.editProfile)

//exportar ruteador//
module.exports = router;