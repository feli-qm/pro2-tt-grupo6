const data = require('../db/data');

const productsController= {
    index: function(req, res) {
        return res.render("productos",{lista: data.productos}); 
    }};
module.exports= productsController;