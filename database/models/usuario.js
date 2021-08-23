module.exports = (sequelize, dataTypes) => {
    let alias = 'Usuarios'
    let cols = {
        id:{
            type: dataTypes.INTEGER,
            autoIncrement: true,
            primaryKey: true
        },
        nombre:{
            type: dataTypes.STRING,
        } ,
        apellido:{
            type: dataTypes.STRING
        } ,
        email:{
            type: dataTypes.STRING
        } ,
        passwords: {
            type: dataTypes.STRING
        }
    }
    let config = {
        // En el caso de que la tabla no se llame como el plural de este archivo, aca es donde se le dice cual es el nombre de la tabla que vamos a usar
        tableName: 'usuarios' ,
        //En el caso de no tener las columnas de creacion y modificacion de datos es fundamental añadir el timestamp en FALSE para que sequelize no rompa
        timestamps: false
    }
    const Usuario = sequelize.define(alias, cols,config)


    return Usuario
}