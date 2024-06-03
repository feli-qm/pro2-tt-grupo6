//importar info que voy a usar en este modulo
const db = require('../database/models');

//crear el modulo en si
const indexController = {
    index: function (req, res) {
        let filtro = {
            order: [["nombreProducto", "ASC"]]
        }
        db.Producto.findAll()
            .then((resultados) => {
                //return res.send(resultados)
                return res.render("index", { productoEncontrado: resultados })
            }).catch((err) => {
                return console.log(err);
            })
        },
    search: function (req, res) {
        return res.render('search-results', { productoEncontrado: products.productos });
    },
};

//exportar el modulo
module.exports = indexController;