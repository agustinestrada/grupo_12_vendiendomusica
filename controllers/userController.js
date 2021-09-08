const { validationResult} = require('express-validator')
const bcrypt = require('bcryptjs')

const db = require('../database/models/index')

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
        let errores = validationResult(req)

        let passHash = bcrypt.hashSync(req.body.clave, 10)

        if(errores.isEmpty()){
            //construir un nuevo usuario tomando los campos que lleno el cliente
            db.Usuarios.create({
                nombre:req.body.nombre ,
                apellido: req.body.apellido,
                email: req.body.email,
                passwords: passHash
            })
            .then(res.redirect('/user'))
        }else{
            res.render('./user/register', { 
                errors: errores.array(),
                old: req.body
            })
        }    
    },

    logeo:(req, res) => {
        let errores = validationResult(req)

        if(errores.isEmpty()){
            const { email, password, recordame} = req.body

            let usuarioALogearse = db.Usuarios.findOne({where:{email}})

            .then(usuarioEncontradp =>{
                
            })
            
            
            db.Usuarios.findOne({
                where:{
                    email
                }
            })
            .then(usuarioBuscado => {
                if(usuarioBuscado != null && usuarioBuscado != undefined){
                    res.send('Bienvenido/a ' + usuarioBuscado.email)

                }else{
                    res.render('./user/login')
                    
                }
            })
        }else{
            res.render('./user/login', {errores})
        }
    },

    list:(req,res)=>{
       db.Usuarios.findAll()
        .then(function(lista){
            res.render('./user/usuario-vista', {lista})
        })
    
       
    }

}

module.exports = userController
