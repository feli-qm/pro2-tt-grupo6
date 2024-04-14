//importar info que voy a usar en este modulo
const data = require('../db/data');

const dataController= {
    index: function(req, res) {
        return res.render("usuario",{lista: data.usuario}); 
    }};

    //Aca iria el search

module.exports = dataController;