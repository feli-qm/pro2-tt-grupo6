//importar info que voy a usar en este modulo
const products = require('../db/data');

//crear el modulo en si
const indexController = {
    index: function (req, res) {
        return res.render('index', { productoEncontrado: products.productos});           //el return va??
    },
    search: function (req, res) {             //como se si va search o las palabras por default? o es lo mismo?
        return res.render('search-results',{ productoEncontrado: products.productos });
    },
};

//exportar el modulo
module.exports = indexController;