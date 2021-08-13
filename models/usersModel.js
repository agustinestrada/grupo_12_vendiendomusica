const fs = require('fs')
const path = require('path')


module.exports = {
    createUser(usuario){
        //leer la data
        
        let lectura = fs.readFileSync(path.join(__dirname, '../data/user.json'), 'utf-8')
        
        //definir la variable que vamos a mandar al JSON
        let usuarios
        //validar si la variable tiene algo o no y actuar en consecuencia
        if (lectura == ""){
            usuarios = []
        }else{
            usuarios = JSON.parse(lectura)
        }

        //sumar el nuevo usuario al JSON existente
        usuarios.push(usuario)

        //volveer a convertir el objeto en JSON
        usuariosJSON = JSON.stringify(usuarios,null,2)

        //reescribir el JSON ahora con todos los usuarios
        fs.writeFileSync(path.join(__dirname, '../data/user.json'),usuariosJSON)
        
        //userModel.createUser()


    }
}