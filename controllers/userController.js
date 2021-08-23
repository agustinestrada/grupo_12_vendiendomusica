const fs = require('fs')
const path = require('path')
const userModel = require('../models/usersModel.js')
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
        //construir un nuevo usuario tomando los campos que lleno el cliente
        db.Usuarios.create({
            nombre:req.body.nombre ,
            apellido: req.body.apellido,
            email: req.body.email,
            password: req.body.password
        })
            .then(res.redirect('/user'))
    
    },
    logeo:(req, res) => {

    },
    list:(req,res)=>{
       db.Usuarios.findAll()
        .then(function(lista){
            res.render('./user/usuario-vista', {lista})
        })
    
       
    }

}

module.exports = userController
