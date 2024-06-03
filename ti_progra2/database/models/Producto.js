module.exports = function(sequelize, dataTypes) {
    let alias = "Producto";
    let cols = {
        id: {
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER
        },
        idUsuario: {
            type: dataTypes.INTEGER
        },
        foto: {
            type: dataTypes.STRING
        },
        nombreProducto: {
            type: dataTypes.STRING
        },
        descProducto: {
            type: dataTypes.STRING
        },
        createdAt: {
            type: dataTypes.DATE
        },
        updatedAt: {
            type: dataTypes.DATE
        },
        deletedAt: {
            type: dataTypes.DATE
        }
    };
    let config = {
        tableName: "productos",
        timestamps: true,
        underscored: false
    };

    let Producto = sequelize.define(alias, cols, config);

    Producto.associate = function(models) {
        Producto.belongsTo(models.Usuario, {
            as: "productoUsuario", // alias de relación con el modelo
            foreignKey: "idUsuario"
        });

        Producto.hasMany(models.Comentario, {
            as: "productoComentario",
            foreignKey: "idPost"
        });
    };

    return Producto;
};

