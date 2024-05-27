//importar info que voy a usar en este modulo
const db = require('../database/models');
const op = db.Sequelize.Op;

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
  },
  store: function(req, res){
    let form = req.body;
    let guardar = {
      email: form.email,
      nombre: form.usuario,
      contrasenia: form.contrasena,
      fechaNacimiento: form.fecha_nacimiento,
      numeroDocumento: form.nro_documento,
      foto: form.foto_perfil,
    }

    db.Usuario.create(form)
    .then((resultados) => {
      return res.redirect("/users")
    }).catch((err) => {
      return console.log(err);
  })            
  }
};

//exportar el modulo
module.exports = usersController;