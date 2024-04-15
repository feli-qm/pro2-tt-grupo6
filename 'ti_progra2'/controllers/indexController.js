//importar info que voy a usar en este modulo
const products = require('../db/products');

//crear el modulo en si
const indexController= {
    index: function(req, res) {
        return res.render('index'); 
    },
    search: function(req, res) {             //como se si va search o las palabras por default? o es lo mismo?
        return res.render('search-results');
    },
};

//exportar el modulo
module.exports = indexController;