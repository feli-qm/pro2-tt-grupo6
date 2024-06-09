//importar info que voy a usar en este modulo
const db = require('../database/models');
const op = db.Sequelize.Op;
const {validationResult} = require("express-validator")

//crear el modulo en si
const usersController = {
  ingreso: function (req, res, next) {
    res.render('login');
  },
  registro: function (req, res, next) {
    let errors = validationResult(req);
    if(errors.isEmpty()){
      //No hay errores, entonces seguimos 
    }
    else{
       res.render('register', {errors: errors.mapped(), old: req.body});
    }
  },
  perfil: function (req, res, next) {
    let idUsuario=req.params.idUsuario;
    const filtro = {
      include: [{
          association: 'usuarioComentario', 
          include: [{association:'comments'}]
      }, {
          association: 'usuarioProducto'
      }],
  }
  db.Usuario.findByPk(idUsuario, filtro)
  .then((resultados) => {
      return res.send(resultados)
      //return res.render("profile",{perfil: resultados}) // preguntarle a Luis
  }).catch((err) => {
      return console.log(err);
  });   
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