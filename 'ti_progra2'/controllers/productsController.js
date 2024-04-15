const products = require('../db/products');

const productsController= {
    index: function(req, res) {
        return res.render("productos",{lista: products.productos}); 
    }};
module.exports= productsController;