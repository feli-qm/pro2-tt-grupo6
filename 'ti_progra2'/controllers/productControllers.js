const data = require('../db/data');

const productController= {
    index: function(req, res) {
        return res.render("productos",{lista: data.productos}); 
    }};
module.exports= productController;