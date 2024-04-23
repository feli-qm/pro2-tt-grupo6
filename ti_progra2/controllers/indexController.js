//importar info que voy a usar en este modulo
const products = require('../db/data');

//crear el modulo en si
const indexController = {
    index: function (req, res) {
        return res.render('index', { productoEncontrado: products.productos });
    },
    search: function (req, res) {
        return res.render('search-results', { productoEncontrado: products.productos });
    },
};

//exportar el modulo
module.exports = indexController;