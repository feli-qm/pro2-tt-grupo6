//importar info que voy a usar en este modulo
const db = require('../database/models');
const { validationResult } = require("express-validator")


//crear el modulo en si
const productsController = {
    detail: function (req, res) {
        let idProducto = req.params.idProducto;
        const filtro = {
            include: [{
                association: 'productoComentario',
                include: [{ association: 'comentarioUsuario' }],
                order: [['createdAt', 'DESC']]
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
                if (req.session.user != undefined && req.session.user.idProducto == resultados.idProducto) {
                    condition = true;
                }
                return res.render("product-detalle", {
                    productoEncontrado: resultados,
                    condition: condition,
                    comentarioUsuario: resultados.comentarioUsuario,
                    productoComentario: resultados.productoComentario,
                    productoUsuario: resultados.productoUsuario,
                    user: req.session.user
                });
            })
            .catch((err) => {
                return res.send("Error al cargar el detalle del producto");
            });
    },
    add: function (req, res) {
        if (req.session.user != undefined) {
            return res.render("product-add");
        } else {
            return res.redirect("/users/login");
        }
    },
    store: function (req, res) {
        let form = req.body;
        let errors = validationResult(req);

        if (errors.isEmpty()) {
            db.Producto.create(form)
                .then((resultados) => {
                    return res.redirect("/products/" + resultados.id);
                }).catch((err) => {
                    return console.log(err);
                });
        } else {
            return res.render('product-add', { errors: errors.mapped(), old: req.body });
        }
    },
    edit: function (req, res) {
        let form = req.body;
        let id = form.id;
        let filtro = {
            include: [
                { association: "productoUsuario" }
            ]
        };
        db.Producto.findByPk(id, filtro)
            .then((resultados) => {
                return res.render("product-edit", { productoEncontrado: resultados, productoUsuario: resultados.productoUsuario });
            })
            .catch((err) => {
                return console.log(err);
            });
    },

    editForm: function (req, res) {
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
                if (form.idUsuario == id) {
                    db.Producto.update(form, filtro)
                        .then(() => {

                            return res.redirect("/products/" + form.id);
                        })
                        .catch((err) => {
                            console.log(err);
                        });
                } else {

                    return res.redirect("/users/profile/" + id);
                }
            } else {

                return res.redirect("/users/login");
            }
        } else {
            let filtro2 = {
                include: [
                    { association: "productoUsuario" }
                ]
            };
            db.Producto.findByPk(form.id, filtro2)
                .then((resultados) => {
                    return res.render('product-edit', {
                        errors: errors.mapped(),
                        old: req.body,
                        productoEncontrado: resultados,
                        productoUsuario: resultados.productoUsuario
                    });
                })
                .catch((err) => {
                    console.log(err);
                });
        }
    },

    delete: function (req, res) {
        let form = req.body;
        let filtro = {
            where: {
                id: form.id
            }
        };

        if (req.session.user) {
            let idUsuario = req.session.user.id;
            if (form.idUsuario == idUsuario) {
                //Primero destruyo los comentarios (si es que hay), para poder destruir el producto
                db.Comentario.destroy({
                    where: {
                        idPost: form.id
                    }
                })
                    .then(() => {
                        db.Producto.destroy(filtro)
                            .then(() => {
                                return res.redirect("/");
                            })
                            .catch((err) => {
                                console.log(err);
                            });
                    })
                    .catch((err) => {
                        console.log(err);
                    });
            } else {
                return res.redirect("/users/profile/" + idUsuario);
            }
        } else {
            return res.redirect("/login");
        }
    },

    comment: function (req, res) {

        let form = req.body;
        let errors = validationResult(req);
        console.log("errors:", errors)

        if (errors.isEmpty()) {
            let comentario = {
                idUsuario: req.session.user.id,
                idPost: req.params.idProducto,
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
            let id = req.params.idProducto;
            console.log("id:", id)
            let condition = false;
            let filtro = {
                include: [
                    { association: "productoUsuario" },
                    {
                        association: "productoComentario",
                        include: [{ association: "comentarioUsuario" }
                        ]
                    }
                ]
            }
            db.Producto.findByPk(id, filtro)
                .then(function (resultados) {

                    if (req.session.user != undefined && req.session.user.id == resultados.id) {
                        condition = true;
                    }
                    return res.render("product-detalle", {
                        productoEncontrado: resultados,
                        condition: condition,
                        comentarioUsuario: resultados.comentarioUsuario,
                        productoComentario: resultados.productoComentario,
                        productoUsuario: resultados.productoUsuario,
                        user: req.session.user,
                        errors: errors.mapped(),
                        old: req.body
                    });
                })
                .catch(function (error) {
                    console.log(error);
                });
        }
    }
};

//exportar el modulo
module.exports = productsController;