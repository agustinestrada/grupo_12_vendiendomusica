const express = require('express')
const usersRouter = express.Router()
const userController = require('../controllers/userController')
const userValidation = require('../middlewares/userValidationMiddleware')
const { body } = require('express-validator')

const register = [
    body('nombre').notEmpty().withMessage('Completa con tu nombre'),
    body('apellido').notEmpty().withMessage('Completa con tu apellido'),
    body('email').isEmail().withMessage('Por favor ingresa un email valido'),
    body('password').isLength({min:6}).withMessage('La contraseña debe tener como minimo 6 caracteres')
]

// Rutas por GET
usersRouter.get('/login', userController.login)
usersRouter.get('/register', userController.register)
usersRouter.get('/contact', userController.contacto)
//ruta de prueba
usersRouter.get('/', userController.list)


// Rutas por POST
usersRouter.post('/register',userValidation.register,userController.storageUser)
usersRouter.post('/login',userController.logeo)


module.exports = usersRouter;