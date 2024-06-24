//importar info que voy a usar en este modulo
const db = require('../database/models');
const bcrypt = require("bcryptjs");
const { validationResult } = require("express-validator")

//crear el modulo en si
const usersController = {
  register: function (req, res, next) {
    if (req.session.user != undefined) {
      return res.redirect("/");
    }
    else {
      return res.render('register')
    };
  },
  store: function (req, res) {
    let form = req.body;
    let errors = validationResult(req);
    let foto = "default-image.png";
    if (form.foto != "") {
      foto = form.foto;
    }
    if (errors.isEmpty()) {
      let usuarioCreado = {
        email: form.email,
        nombre: form.nombre,
        contrasenia: bcrypt.hashSync(form.contrasenia, 10),
        fechaNacimiento: form.fechaNacimiento,
        numeroDocumento: form.numeroDocumento,
        foto: foto
      }
      db.Usuario.create(usuarioCreado)
        .then((resultados) => {
          return res.redirect("/users/login")
        }).catch((err) => {
          return console.log(err);
        });
    } else {

      return res.render('register', { errors: errors.mapped(), old: req.body });

    }
  },
  loginGet: function (req, res) {
    if (req.session.user != undefined) {
      return res.redirect('/')
    }
    else {
      return res.render('login', { error: null })
    }
  },
  loginPost: function (req, res) {
    let form = req.body;
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      let filtro = {
        where: [{ email: form.email }]
      };
      db.Usuario.findOne(filtro)
        .then((resultados) => {

          if (resultados != null) {

            let check = bcrypt.compareSync(form.contrasenia, resultados.contrasenia);

            if (check) {
              req.session.user = resultados;
              if (form.recordarme != undefined) {
                res.cookie("usuarioId", resultados.id, { maxAge: 1000 * 60 * 35 })
              }
              return res.redirect("/");
            } else {
              return res.send("Error en la contrasenia");
            }
          } else {
            return res.send("No hay mail parecidos a: " + form.email);
          }
        }).catch((err) => {
          return console.log(err);
        });
    } else {
      res.render('login', { errors: errors.mapped(), old: req.body, usuario: req.session.user });
    }
  },
  logout: function (req, res, next) {
    req.session.destroy()
    res.clearCookie("usuarioId")
    return res.redirect("/");
  },
  profile: function (req, res, next) {
    let idUsuario = req.params.idUsuario;
    const filtro = {
      include: [
        { association: 'usuarioProducto' },
        { association: 'usuarioComentario' }],
      order: [[{ model: db.Producto, as: 'usuarioProducto' }, 'createdAt', 'DESC']]
    }
    db.Usuario.findByPk(idUsuario, filtro)
      .then((resultados) => {
        let condition = false;
        if (req.session.user != undefined && req.session.user.id == resultados.idUsuario) {
          condition = true;
        }
        return res.render("profile", {
          perfil: resultados,
          condition: condition,
          usuarioProducto: resultados.usuarioProducto,
          usuarioComentario: resultados.usuarioComentario
        });
      }).catch((err) => {
        return console.log(err);
      });
  },
  editProfile: function (req, res, next) {
    if (req.session.user != undefined) {
      let id = req.session.user.id;
      db.Usuario.findByPk(id)
        .then(function (resultados) {
          return res.render('profile-edit', { usuario: resultados });
        })
        .catch(function (error) {
          console.log(error);
        });
    } else {
      return res.redirect("/users/login");
    }
  },

  editFormProfile: function (req, res) {
    let form = req.body;
    let errors = validationResult(req);

    if (errors.isEmpty()) {
      let filtro = {
        where: {
          id: form.id
        }
      };
      if (req.session.user != undefined) {
        let id = req.session.user.id;
        if (form.id == id) {
          db.Usuario.update(form, filtro)
            .then(() => {
              return res.redirect("/users/profile/" + form.id);
            })
            .catch((err) => {
              console.log(err);
            });
        } else {

          return res.redirect("/users/profile/" + id);
        }
      }
    }
  }
};

//exportar el modulo
module.exports = usersController;