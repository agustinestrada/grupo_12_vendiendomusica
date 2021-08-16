const path = require('path')
const {check, validationResult, body } = require('express-validator')

module.exports = {
    
    register: [
        body('nombre').notEmpty().withMessage('Completa con tu nombre'),
        body('apellido').notEmpty().withMessage('Completa con tu apellido'),
        body('email').isEmail().withMessage('Por favor ingresa un email valido'),
        body('password').isLength({min:6}).withMessage('La contraseña debe tener como minimo 6 caracteres')
    ]
}