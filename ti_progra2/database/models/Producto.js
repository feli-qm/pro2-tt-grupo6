module.exports = function(sequelize, dataTypes){
    let alias= "Product";
    let cols={
        id:{
            autoIncrement : true,
            primaryKey : true,
            type : dataTypes.INTEGER
        },
        idUsuario:{
            type : dataTypes.INTEGER
        },
        foto:{
            type : dataTypes.STRING
        }, 
        nombreProducto:{
            type : dataTypes.STRING
        }, 
        descProducto:{
            type : dataTypes.STRING
        }, 
        createdAt:{
            type : dataTypes.DATE
        }, 
        updatedAt:{
            type : dataTypes.DATE
        }, 
        deletedAt:{
            type : dataTypes.DATE
        }
    }
    let config = {
        tableName: "productos",
        timestamps: true,
        underscored: false
    }
    
    let productos = sequelize.define(alias, cols, config);
    return productos;
}