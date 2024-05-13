//importar info que voy a usar en este modulo
const db = require('../database/models');

//crear el modulo en si
const productsController = {
    index: function (req, res) {
        db.Product.findAll() //dudas OK Brian
            .then((resultados) => {
                return res.send(resultados)
                return res.render("product", { datos: resultados })
            }).catch(function(err) {
                return console.log(err);
            })            
    },
    add: function (req, res) {
        return res.render('product-add', { perfil: products.usuario });
    },
    store: function (req, res) {
        return res.redirect("/")
    }
};

//exportar el modulo
module.exports = productsController;