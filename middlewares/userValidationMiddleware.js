const path = require('path')
const {body} = require('express-validator')
const db = require('../database/models/index')
const { Usuarios } = require('../database/models');
const bcrypt = require('bcryptjs')


module.exports = {
    
    register: [
        body('nombre')
            .notEmpty()
            .withMessage('Completa con tu nombre'),
        body('apellido')
            .notEmpty()
            .withMessage('Completa con tu apellido'),
        body('email')
            .isEmail()
            .withMessage('Por favor ingresa un email valido')
            .custom(async (value, { req }) => {
                const { email } = req.body
                
                // encontrar un usuario con el email
                const userFound = await Usuarios.findOne({
                    where: {
                        email
                    }
                })

                // chequear que userFound no este registrado
                if (userFound) {
                    return Promise.reject('El usuario ya existe')
                    }else{
                        return true
                    }
                    
                }
            )
            ,
        body('clave')
            .isLength({min:4})
            .withMessage('la contraseña es demasiado corta')
            ,
        body('profilePic')
        .custom((value, { req }) => {
            const { file } = req
            //cuequea que haya cargado una imagen
            if (!file) {
                    
            throw new Error('Seleccione un archivo')
            }
            //cuequea que la extension sea la correcta
            
            const AVIABLE_EXTENSIONS = ['.jpg', '.jpeg', '.gif', '.png']
            const extension = path.extname(file.originalname)
            
            if (!AVIABLE_EXTENSIONS.includes(extension)){ 
                throw new Error ('Las extensiones soportadas son : .jpg, .jpeg, .gif, o .png')
            }
    
            return true
    
        })
        .withMessage('Las extensiones soportadas son : .jpg, .jpeg, .gif, o .png')
        ,
    ],
    validacionLogeo: [
        body('email')
            .isEmail()
            .withMessage('Por favor ingresa un email valido'),
        body('clave')
            .notEmpty()
            .withMessage('Por favor ingrese su password')
            .bail()
            .custom(async (value, { req }) => {
                const { email, clave } = req.body
                
                // encontrar un usuario con el email
                const userFound = await Usuarios.findOne({
                    where: {
                        email
                    }
                })

                // chequear que userFound exista
                if (userFound) {

                    // comparar contraseñas
                    const passwordMatch = bcrypt.compareSync(clave, userFound.passwords)

                    if (!passwordMatch) {
                        return Promise.reject('El usuario o la contraseña son inválidas');
                    }

                    return true
                    
                } else {
                    return Promise.reject('El usuario o la contraseña son inválidas');
                }
            })
    ]
}