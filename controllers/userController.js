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
        let usuario = {
            nombre: req.body.name,
            apellido:req.body.last,
            email:req.body.email,
            contraseña:req.body.password,
        }    

        //leer la data
        
        let lectura = fs.readFileSync(path.join(__dirname, '../data/user.json'), {encoding:'utf-8'})
        
        let usuarios

        if (lectura == ""){
            usuarios = []
        }else{
            usuarios = JSON.parse(lectura)
        }

        usuarios.push(usuario)

        usuariosJSON = JSON.stringify(usuarios)

        fs.writeFileSync(path.join(__dirname, '../data/user.json'),usuariosJSON)
       

       /* let usuarioJSON = JSON.stringify(usuario)

        fs.appendFileSync(path.join(__dirname, '../data/user.json'),usuarioJSON)
*/
        res.render('exito')
    
    },
    logeo:(req, res) => {}

}

module.exports = userController
