//importar info que voy a usar en este modulo
const db = require('../database/models');
const op= db.Sequelize.Op;

//crear el modulo en si
const indexController = {
    index: function (req, res) {
        let filtro = {
            order: [["nombreProducto","createdAt", "DESC"]]
        }
        db.Producto.findAll()
            .then((resultados) => {
                //return res.send(resultados)
                return res.render("index", { productos: resultados })
            }).catch((err) => {
                console.log(err);
            })
        },
        search: function(req, res) {
            let filtro = {
                where: {
                    [op.or]: [
                        {nombreProducto: { [op.like]: "%" + req.query.search + "%"}},
                        {descProducto: { [op.like]: "%" + req.query.search + "%"}}
                    ]
                },
                order: [["createdAt", "DESC"]],
                include: [
                    {association: "productoUsuario"},
                    {association: "productoComentario"}
                ]
            }
        
            db.Producto.findAll(filtro)
                .then((resultados) => {
                    if (resultados.length === 0 || !req.query.search) { 
                        return res.render("search-results", { productos:[], error: 'No hay resultados para su criterio de búsqueda' });
                    } else {
                        res.render('search-results', {productos: resultados, productoEncontradoComentarios: resultados.productoComentario , productoUsuario: resultados.productoUsuario});
                    }
                })
                .catch((err) => {
                    console.log(err);
                    return res.send("Error al buscar productos");
                });
        }
        };

//exportar el modulo
module.exports = indexController;