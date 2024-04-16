//importar info que voy a usar en este modulo
const products = require('../db/data');

//crear el modulo en si
const usersController = {
  ingreso: function (req, res, next) {
    res.render('login');
  },
  registro: function (req, res, next) {
    res.render('register');
  },
  perfil: function (req, res, next) {
    res.render('profile', { perfil: products.usuario, productoEncontrado: products.productos[0] });
  },
  edicionPerfil: function (req, res, next) {
    res.render('profile-edit');                //sumamos tmb /users solo?    y users/
  }
};

//exportar el modulo
module.exports = usersController;