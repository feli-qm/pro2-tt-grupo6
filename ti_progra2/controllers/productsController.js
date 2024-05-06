//importar info que voy a usar en este modulo
const db = require('../database/models');

//crear el modulo en si
const productsController = {
    index: function (req, res) {
        return res.render('product', { productoEncontrado: products.productos[0] });
    },
    add: function (req, res) {
        return res.render('product-add', { perfil: products.usuario });
    }
};

//exportar el modulo
module.exports = productsController;