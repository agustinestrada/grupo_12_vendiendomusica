module.exports = (sequelize, dataTypes) => {
    let alias = 'Producto'
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true,
        },
        nombre:{
            type: dataTypes.STRING,
        },
        precio:{
            type: dataTypes.INTEGER,
        },
        categoria:{
            type: dataTypes.STRING,
        },
        imagen: {
            type: dataTypes.STRING,
        },
        descripcion:{
            type: dataTypes.STRING,
        }
    }
    
    let config = {
        tableName: 'productos',
        timestamps: false
    }

    const Producto = sequelize.define(alias, cols, config)

    return Producto
}