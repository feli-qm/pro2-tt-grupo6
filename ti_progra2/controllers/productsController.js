//importar info que voy a usar en este modulo
const db = require('../database/models');
const op= db.Sequelize.Op; //chequear que lo estemos usando sino borrarlo
const {validationResult} = require("express-validator")


//crear el modulo en si
const productsController = {
    detail: function(req, res) {
        let idProducto = req.params.idProducto;
        const filtro = {
            include: [{
                association: 'productoComentario', 
                include: [{ association: 'comentarioUsuario' }]
            }, {
                association: 'productoUsuario'
            }],
            order: [
                ["productoComentario", "createdAt", "DESC"]
            ]
        };
        
        db.Producto.findByPk(idProducto, filtro)
            .then((resultados) => {
                let condition = false;
                if (req.session.usuario  != undefined && req.session.usuario.idUsuario == resultados.idProducto) {
                    condition = true;
                }
                return res.render("product-detalle", { 
                    productoEncontrado: resultados,
                    condition: condition,
                    productoUsuario: resultados.productoUsuario,
                    comentarioUsuario: resultados.comentarioUsuario,
                    productoComentario: resultados.productoComentario
                });
            })
            .catch((err) => {
                console.log(err);
                return res.status(500).send("Error al cargar el detalle del producto");
            });
    }, 
    add: function (req, res) {
        return res.render('product-add', { perfil: products.usuario });
    },
    store: function(req, res) {
        let form = req.body;
        let errors = validationResult(req);
        
        if (errors.isEmpty()) {
            db.Producto.create(form)
                .then((resultados) => {
                   return res.redirect("/");
                })
                .catch((err) => {
                    return console.log(err);
                });
        } else {
            return res.render('product-add', { errors: errors.mapped(), old: req.body });
        }
   },    
    edit: function(req, res) {
        let idProducto = req.params.idProducto;
        let filtro = {
            include: [
                { association: "productoUsuario" }
            ]
        };
    
        db.Producto.findByPk(idProducto, filtro)
            .then((resultados) => {
                //return res.send (resultados)
                return res.render("product-edit", { product: resultados });
            })
            .catch((err) => {
                return console.log(err);
            });
    },
    
    editForm: function(req, res) {
        let form = req.body;
        let errors = validationResult(req);

        if (!errors.isEmpty()) {
            let filtro2 = {
                include: [{ association: "productoUsuario" }]
            };

            db.Producto.findByPk(req.params.idProducto, filtro2)
                .then((resultados) => {
                    return res.render('product-edit', {
                        errors: errors.array(),
                        old: req.body,
                        productoEncontrado: resultados
                    });
                })
                .catch((err) => {
                    console.log(err);
                    return res.status(500).send('Error interno del servidor');
                });
        } else {
            let filtro = {
                where: { id: req.params.idProducto }
            };

            if (req.session.usuario) {
                db.Producto.update(form, filtro)
                    .then(() => {
                        return res.redirect("/products/id/" + req.params.idProducto);
                    })
                    .catch((err) => {
                        console.log(err);
                        return res.status(500).send('Error interno del servidor');
                    });
            } else {
                return res.redirect("/users/profile/id/" + req.params.idProducto);
            }
        }
    },
    
    delete: function(req, res) {
        let idProducto = req.params.idProducto;
    
        if (req.session.usuario != undefined) {
            let idUsuario = req.session.idUsuario;
    
            db.Producto.findByPk(idProducto)
                .then((resultados) => {
                    if (resultados.idUsuario == idUsuario) {
                        db.Producto.destroy({
                            where: {
                                id: idProducto
                            }
                        })
                        .then(() => {
                            return res.redirect("/");
                        })
                        .catch((err) => {
                            return console.log(err);
                        });
                    } else {
                        return res.redirect("/users/profile/id/" + idUsuario);
                    }
                })
                .catch((err) => {
                    return console.log(err);
                });
        } else {
            return res.redirect("/users/login");
        }
    },
   
    comment: function(req, res) {
        let form = req.body;
        let errors = validationResult(req);
        if (errors.isEmpty()) {
            let comentario = {
                idUsuario: req.session.usuario.idUsuario, //chequear si es asi 
                idPost: req.params.id, //chequear si se llama asi
                comentario: form.comentario
            };
            db.Comentario.create(comentario)
            .then((resultados) => {
                return res.redirect("/products/" + comentario.idPost);
            })
            .catch((err) => {
                return console.log(err);
            });
        } else {
            let id = req.params.id;
            let condition = false;
            let filtro = {
                include: [
                    {association: "usuarioComentario"},
                    {association: "productoComentario",
                    include:[{association:"comentarioUsuario"}
                ]}
            ]
            }
            db.Producto.findByPk(id, filtro)
            .then(function(resultados){
                if (req.session.usuario != undefined && req.session.usuario.idUsuario == resultados.idUsuario){
                    condition = true;
            }
            return res.render("product-detalle", {productoEncontrado: resultados, comentarios: resultados.productoComentario, codition: condition, errors: errors.mapped(), old: req.body})})
            .catch(function(error){
                console.log(error);
            });
        }
    }
};    

//exportar el modulo
module.exports = productsController;