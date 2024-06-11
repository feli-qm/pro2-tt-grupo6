//importar info que voy a usar en este modulo
const db = require('../database/models');
const bcrypt = require("bcryptjs");
const op = db.Sequelize.Op;
const {validationResult} = require("express-validator")

//crear el modulo en si
const usersController = {
  loginGet: function (req, res) {
    if (req.session.user){
      res.redirect('/')
    }
    else {
      res.render('login', {error:null})
    }
    res.render('login');
  },
  //loginPost: function (req, res) {
     
  //},
  register: function (req, res, next) {
    return res.render("register")
    
  },
  //logout: function(req, res, next) {
   // req.session.destroy()
   // res.clearCookie(“userId”)
    //return res.redirect("/");
  //},
  profile: function (req, res, next) {
    let idUsuario=req.params.idUsuario;
    const filtro = {
      include: [
        {association: 'usuarioProducto', include: [
                {association:'productoComentario'}]
      }],
  }
  //return res.send(idUsuario)
  db.Usuario.findByPk(idUsuario, filtro )
  .then((resultados) => {
    return res.send(resultados)
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
    let errors = validationResult(req);
    if(errors.isEmpty()){
      let usuarioCreado = {
        email: form.email,
        nombre: form.nombre,
        contrasenia: bcrypt.hashSync(form.contrasenia, 10),
        fechaNacimiento: form.fechaNacimiento,
        numeroDocumento: form.numeroDocumento,
        foto: form.foto,
    }

    db.Usuario.create(usuarioCreado)
    .then((resultados) => {
      return res.redirect("/")
    }).catch((err) => {
      return console.log(err);
  }); 
    }
    else{
     
      return res.render('register', {errors: errors.mapped(), old: req.body});
              
  }
}
}

//exportar el modulo
module.exports = usersController;