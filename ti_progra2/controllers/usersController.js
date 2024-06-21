//importar info que voy a usar en este modulo
const db = require('../database/models');
const bcrypt = require("bcryptjs");
const op = db.Sequelize.Op; //chequear que lo estemos usando sino borrarlo
const {validationResult} = require("express-validator")

//crear el modulo en si
const usersController = {
  loginGet: function (req, res) {
    if (req.session.usuario != undefined){
      return res.redirect('/')
    }
    else {
      return res.render('login', {error:null})
    }
  },
  loginPost: function (req, res) {
     let form = req.body;
     let errors = validationResult(req);

     if (errors.isEmpty()){
      let filtro = {
        where: [{email:form.email}]
       }
       db.Usuario.findOne(filtro)

     .then((resultados) => {
      if (resultados != null){
        req.session.usuario = resultados;
        if(form.recordarme != undefined){
          res.cookie("usuarioId", resultados.id, {maxAge: 1000 * 60 * 35})
        }
        return res.redirect("/");

      } else {
        return res.send("No hay mail similar a: " + form.email);
      }
    }).catch((err) => {
      return console.log(err);
    }); 
  }else{
    res.render('login', {errors: errors.mapped(), old: req.body, usuario: req.session.usuario});
  }
     },

  register: function (req, res, next) {
      if (req.session.usuario != undefined) {
          return res.redirect("/"); 
      } 
      else {
          return res.render('register')
      };
 
  },
  logout: function(req, res, next) {
    req.session.destroy()
    res.clearCookie("usuarioId")
    return res.redirect("/");
  },
  profile: function (req, res, next) {
    let idUsuario=req.params.idUsuario;
    const filtro = {
      include: [
        {association: 'usuarioProducto'}, 
        {association:'usuarioComentario'}],
      order: [[{model: db.Producto, as: 'usuarioProducto'}, 'createdAt', 'DESC']]
  }
  db.Usuario.findByPk(idUsuario, filtro)
  .then((resultados) => {
    let condition = false;
    if (req.session.usuario != undefined && req.session.usuario.idUsuario == resultados.idUsuario){
      condition = true;
    }
    return res.render("profile", {perfil: resultados, condition: condition, usuarioProducto: resultados.usuarioProducto, usuarioComentario: resultados.usuarioComentario});
  }).catch((err) => {
      return console.log(err);
  });   
  },
  //editProfile: function (req, res, next) {
   // res.render('profile-edit');
  //},
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
        foto: form.foto || "/images/users/default-image.png"
    }

    db.Usuario.create(usuarioCreado)
    .then((resultados) => {
      return res.redirect("/")
    }).catch((err) => {
      return console.log(err);
  }); 
    }else{
     
      return res.render('register', {errors: errors.mapped(), old: req.body});
              
  }
}
};

//exportar el modulo
module.exports = usersController;