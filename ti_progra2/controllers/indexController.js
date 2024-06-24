//importar info que voy a usar en este modulo
const db = require('../database/models');
const op= db.Sequelize.Op; 

//crear el modulo en si
const indexController = {
    index: function (req, res) {
        let filtro = {
            include: [
                { association: "productoUsuario" },
                { association: "productoComentario" }
            ],
            order: [['createdAt', 'DESC']]
        }
        db.Producto.findAll(filtro)
            .then((resultados) => {
                //return res.send(resultados)
                return res.render("index", { productos: resultados })
            }).catch((err) => {
                console.log(err);
            })
        },

        search: function(req, res) {
            let search = req.query.search;
            let filtro = {
                where: {
                    [op.or]: [
                        { nombreProducto: { [op.like]: "%" + search + "%" }}, //con que tenga una letra parecida ya aparece en el buscador
                        { descProducto: { [op.like]: "%" + search + "%" }}
                    ]
                },
                order: [["createdAt", "DESC"]],
            include: [
                { association: "productoUsuario" },
                { association: "productoComentario" }
            ]
            };
            db.Producto.findAll(filtro)
                .then((resultados) => {
                    //si no hay busqueda o si no tiene nada que ver
                    if (resultados.length === 0 || !search) { 
                        return res.render('search-results', { productos: [], error: "No hay resultados para su criterio de búsqueda", search: search });
                    } else { //si existe ese producto o tiene q ver
                        return res.render('search-results', { productos: resultados, error: null, search: search});
                    }
                })
                .catch((err) => {
                    console.log(err);
                    return res.send("Error al buscar productos");
                });
        }};
        

//exportar el modulo
module.exports = indexController;