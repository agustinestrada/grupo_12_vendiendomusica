const path = require('path')
const {body} = require('express-validator')
const db = require('../database/models/index')

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
            .withMessage('Por favor ingresa un email valido'),
        body('clave')
            .isLength({min:4})
            .withMessage('la contraseña es demasiado corta')
    ],
    validacionLogeo: [
        body('email')
            .isEmail()
            .withMessage('Por favor ingresa un email valido')
    ]
}