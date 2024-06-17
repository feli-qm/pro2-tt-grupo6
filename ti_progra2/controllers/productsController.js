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
                    return res.redirect("/products");
                })
                .catch((err) => {
                    return console.log(err);
                });
        } else {
            return res.render('product-add', { errors: errors.mapped(), old: req.body });
        }
    },    
    editForm: function(req, res) {
        let form = req.body;
        let id = form.id;
        let filtro = {
            include: [
                { association: "productoUsuario" }
            ]
        };
    
        db.Producto.findByPk(id, filtro)
            .then((resultados) => {
                return res.render("product-edit", { product: resultados });
            })
            .catch((err) => {
                return console.log(err);
            });
    },
    
    edit: function(req, res) {
        let form = req.body;
        let errors = validationResult(req);
    
        if (errors.isEmpty()) {
            let filtro = {
                where: {
                    id: form.id
                }
            };
    
            if (req.session.usuario != undefined) {
                let idUsuario = req.session.idUsuario;
                db.Producto.edit(form, filtro)
                    .then((resultados) => {
                        return res.redirect("/product/id/" + form.id);
                    })
                    .catch((err) => {
                        return console.log(err);
                    });
            } else {
                return res.redirect("/users/profile/id/" + form.id);
            }
        } else {
            return res.redirect("/users/login");
        }
    
        let filtro2 = {
            include: [{ association: "productoUsuario" }]
        };
    
        db.Producto.findByPk(form.id, filtro2)
            .then(function(resultados) {
                return res.render('product-edit', {
                    errors: errors.mapped(),
                    old: req.body,
                    productoEncontrado: resultados
                });
            })
            .catch((err) => {
                return console.log(err);
            });
    },
    
    delete: function(req, res) {
        let form = req.body;
        let filtro = {
            where: {
                id: form.id
            }
        };
    
        if (req.session.usuario != undefined) {
            let idUsuario = req.session.idUsuario;
            if (form.idUsuario == idUsuario) {
                db.Producto.destroy(filtro)
                    .then((resultados) => {
                        return res.redirect("/");
                    })
                    .catch((err) => {
                        return console.log(err);
                    });
            } else {
                return res.redirect("/users/profile/id/" + idUsuario);
            }
        } else {
            return res.redirect("/users/login");
        }
    }
};    

//exportar el modulo
module.exports = productsController;