//importar info que voy a usar en este modulo
const data = require('../db/data');

//crear el modulo en si
const dataController= {
    index: function(req, res) {
        return res.render("usuario",{lista: data.usuario}); 
    }};

    //Aca iria el search

//exportar el modulo
module.exports = dataController;