const path = require('path')
const {check, validationResult, body } = require('express-validator')

module.exports = {
    
    register: [
        check('nombre').notEmpty().withMessage('Completa con tu nombre'),
        check('apellido').notEmpty().withMessage('Completa con tu apellido'),
        check('email').isEmail().withMessage('Por favor ingresa un email valido'),
        check('password').isLength({min:6}).withMessage('La contraseña debe tener como minimo 6 caracteres')
    ],
    login: [

    ]
}