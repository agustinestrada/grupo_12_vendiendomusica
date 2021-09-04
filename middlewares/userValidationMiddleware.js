const path = require('path')
const {check, validationResult, body } = require('express-validator')

module.exports = {
    
    register: [
        check('nombre').notEmpty().withMessage('Completa con tu nombre'),
        check('apellido').notEmpty().withMessage('Completa con tu apellido'),
        check('email').isEmail().withMessage('Por favor ingresa un email valido')
    ],
    login: [

    ]
}