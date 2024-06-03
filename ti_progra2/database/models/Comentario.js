module.exports = function(sequelize, dataTypes){
    let alias = "Comentario";
    let cols = {
        id: {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },
        idPost: {
            type : dataTypes.INTEGER
        },
        idUsuario: {
            type : dataTypes.INTEGER
        },
        comentario: {
            type : dataTypes.STRING
        }, 
        createdAt: {
            type : dataTypes.DATE
        },
        updatedAt: {
            type : dataTypes.DATE
        },
        deletedAt: {
            type : dataTypes.DATE
        }
  	}

    let config = {
        tableName: "comentarios",
        timestamps: true,
        underscored: false
    }
    
    let Comentario = sequelize.define(alias, cols, config);
    Comentario.associate = function(models) {
        Comentario.belongsTo(models.Usuario, {
            as: 'comentariosUsuario',
            foreignKey: 'idUsuario'
        });

        Comentario.belongsTo(models.Producto, {
            as: 'comments',
            foreignKey: 'idPost'
        });
    };
    return Comentario;

        };