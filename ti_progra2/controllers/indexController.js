//importar info que voy a usar en este modulo
const db = require('../database/models');

//crear el modulo en si
const indexController = {
    index: function (req, res) {
        
        return res.render('index', { productoEncontrado: ""});

    },
    search: function (req, res) {
        return res.render('search-results', { productoEncontrado: products.productos });
    },
};

//exportar el modulo
module.exports = indexController;