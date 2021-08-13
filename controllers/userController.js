const fs = require('fs')
const path = require('path')
const userModel = require('../models/usersModel.js')

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
        const {nombre, apellido, email,contraseña} = req.body

        const usuario = {
            nombre,
            apellido,
            email,
            contraseña
        }

        userModel.createUser(usuario)


        res.render('exito')
    
    },
    logeo:(req, res) => {}

}

module.exports = userController
