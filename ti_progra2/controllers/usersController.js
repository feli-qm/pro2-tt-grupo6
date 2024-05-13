//importar info que voy a usar en este modulo
const db = require('../database/models');
const usuario = db.Usuario;

//crear el modulo en si
const usersController = {
  ingreso: function (req, res, next) {
    res.render('login');
  },
  registro: function (req, res, next) {
    res.render('register',);
  },
  perfil: function (req, res, next) {
    res.render('profile', { });
  },
  edicionPerfil: function (req, res, next) {
    res.render('profile-edit', { });
  }
};

//exportar el modulo
module.exports = usersController;