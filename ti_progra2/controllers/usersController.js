//importar info que voy a usar en este modulo
const products = require('../db/products');

//crear el modulo en si
const usersController = {
    ingreso: function(req, res, next) {
        res.render('login');
      },
    registro: function(req, res, next) {
        res.render('register');
      },
    perfil: function(req, res, next) {
        res.render('profile');
      },
      edicionPerfil: function(req, res, next) {
        res.render('profile-edit');                //sumamos tmb /users solo?    y users/
      }
};

//exportar el modulo
module.exports = usersController;