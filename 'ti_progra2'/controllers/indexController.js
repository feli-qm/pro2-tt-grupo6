//importar info que voy a usar en este modulo
const products = require('../db/products');

//crear el modulo en si
const indexController= {
    index: function(req, res) {
        return res.render('index'); 
    }};

    //Aca iria el search

//exportar el modulo
module.exports = indexController;  