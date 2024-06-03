//importar info que voy a usar en este modulo
const db = require('../database/models');
const op= db.Sequelize.Op;


//crear el modulo en si
const productsController = {
    index: function (req, res) { //detalle producto
        let idProducto=req.params.idProducto;
        // return res.send(idProducto)
        db.Product.findByPk(idProducto)
        .then((resultados) => {
            // return res.send(resultados)
            return res.render("product",{productoEncontrado: resultados})
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
    }
};

//exportar el modulo
module.exports = productsController;