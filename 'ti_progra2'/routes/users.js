//importar express y router//
var express = require('express');
var router = express.Router();
const usersController = require('../controllers/usersController');

//crear rutas con sus sufijos//
/* GET users listing. */
router.get('/login', usersController.ingreso);
router.get('/register', usersController.registro);
router.get('/profile', usersController.perfil);
router.get('/profile-edit.html', usersController.edicionPerfil);   // esta bien??? o solo edit?

module.exports = router;
