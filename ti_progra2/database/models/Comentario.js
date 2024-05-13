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
    
    let comentarios = sequelize.define(alias, cols, config);
    return comentarios;

        }
