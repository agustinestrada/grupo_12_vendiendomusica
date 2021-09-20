const { validationResult, body} = require('express-validator')
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
    
    storageUser: (req, res) => {
        
        let errores = validationResult(req)

        let passHash = bcrypt.hashSync(req.body.clave, 10)

       if(!req.file.filename){
            req.file.filename = 'defaults.jpg'
        }


        if(errores.isEmpty()){
            //construir un nuevo usuario tomando los campos que lleno el cliente
            db.Usuarios.create({
                nombre:req.body.nombre ,
                apellido: req.body.apellido,
                email: req.body.email,
                passwords: passHash,
                imagen: req.file.filename
            })
            .then(res.redirect('/user'))
        }else{
            res.render('./user/register', { 
                errors: errores.array(),
                old: req.body
            })
        }    
    },

    logeo:async(req, res) => {
        
        let errores = validationResult(req)
        
        if(errores.isEmpty()){
            let email = req.body.email

            req.session.usuarioLogeado = await db.Usuarios.findOne({where:{email}})

            if (req.body.recordame) {
                
                res.cookie('emailUsuario', email, { maxAge: 1000 * 30 })
                
                res.redirect('/')

            }
            res.redirect('/')
            
                
        }else{
            res.render('./user/login', {errores})
        }
    },

    list:(req,res)=>{
       db.Usuarios.findAll()
        .then(function(lista){
            res.render('./user/usuario-vista', {lista})
        })
    
       
    },
    logout: (req, res)=>{
        req.session.destroy()
        res.redirect('/')
    },
    profile: async(req, res)=>{

        let perfilUsuario = await db.Usuarios.findOne({where:{email: req.session.usuarioLogeado.email}})

        res.render('./user/profile',{perfilUsuario} )
    }
}

module.exports = userController
