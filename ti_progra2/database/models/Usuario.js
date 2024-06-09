module.exports = function(sequelize, dataTypes){
    let alias = "Usuario";
    let cols = {
        id: {
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },
        email: {
            type : dataTypes.STRING
        },
        nombre: {
            type : dataTypes.STRING
        },
        contrasenia: {
            type : dataTypes.STRING
        }, 
        fechaNacimiento: {
            type : dataTypes.DATE
        },
        numeroDocumento: {
            type : dataTypes.INTEGER
        },
        foto: {
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
        tableName: "usuarios",
        timestamps: true,
        underscored: false
    }
    
    let Usuario = sequelize.define(alias, cols, config);
    
    Usuario.associate = function(models) {
        Usuario.hasMany(models.Producto, {
            as: "usuarioProducto", // alias de relación con el modelo
            foreignKey: "idUsuario"
        });

        Usuario.hasMany(models.Comentario, {
            as: "usuarioComentario",
            foreignKey: "idUsuario"
        });
    };

    return Usuario;

        }
