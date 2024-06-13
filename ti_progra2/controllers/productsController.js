//importar info que voy a usar en este modulo
const db = require('../database/models');
const op= db.Sequelize.Op; //chequear que lo estemos usando sino borrarlo


//crear el modulo en si
const productsController = {
    detalle: function (req, res) { //detalle producto
        let idProducto=req.params.idProducto;
        const filtro = {
            include: [{
                association: 'productoComentario', 
                include: [{association:'comentariosUsuario'}]
            }, {
                association: 'productoUsuario'
            }],
            order: [
                ["productoComentario", "createdAt", "DESC"]
            ]
        }
        db.Producto.findByPk(idProducto, filtro)
        .then((resultados) => {
            //return res.send(resultados)
            return res.render("product-detalle",{productoEncontrado: resultados})
        }).catch((err) => {
            return console.log(err);
        });        
    
    },
    add: function (req, res) {
        return res.render('product-add', { perfil: products.usuario });
    },

    store: function (req, res) {
        let form=req.body;
        let guardar= {
            foto: form.imagen,
            nombreProducto: form.nombreProducto,
            descProducto: form.descripcion,
        }

        db.Producto.create(form)
        .then((resultados) => {
            return res.redirect("/products")
        }).catch((err) => {
            return console.log(err);
        })        
    },
    borrar: (req, res) => {
        db.Producto.destroy({
            where: {
                id: req.body.id
            }
        }) .then(() => {
                res.redirect('/');
        });
    },
};

//exportar el modulo
module.exports = productsController;