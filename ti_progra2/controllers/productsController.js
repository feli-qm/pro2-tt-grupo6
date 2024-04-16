//importar info que voy a usar en este modulo
const products = require('../db/data');

//crear el modulo en si
const productsController = {
    index: function (req, res) {             //el next va??//
        return res.render('product', { productoEncontrado: products.productos[0] });
    },
    add: function (req, res) {
        return res.render('product-add', { perfil: products.usuario });   //sumamos tmb products/indexhtml? (logo)
    }
};

//exportar el modulo
module.exports = productsController;