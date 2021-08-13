const fs = require('fs')
const path = require('path')

let userController = {
    login: (req, res) => {
        res.render('./user/login')
    },
    register: (req, res) => {
        res.render('./user/register')
    },
    contacto: (req, res) => {
        res.render('./user/contact')
    },
    storageUser:(req, res) => {

        //construir un nuevo usuario tomando los campos que lleno el cliente
        let usuario = {
            nombre: req.body.name,
            apellido:req.body.last,
            email:req.body.email,
            contraseña:req.body.password,
        }    

        //leer la data
        
        let lectura = fs.readFileSync(path.join(__dirname, '../data/user.json'), {encoding:'utf-8'})
        
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
        usuariosJSON = JSON.stringify(usuarios)

        //reescribir el JSON ahora con todos los usuarios
        fs.writeFileSync(path.join(__dirname, '../data/user.json'),usuariosJSON)
       

        res.render('exito')
    
    },
    logeo:(req, res) => {}

}

module.exports = userController
