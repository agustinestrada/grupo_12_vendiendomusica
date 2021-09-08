const express = require('express')
const usersRouter = express.Router()
const userController = require('../controllers/userController')
const userValidation = require('../middlewares/userValidationMiddleware')



// Rutas por GET
usersRouter.get('/login', userController.login)

usersRouter.get('/register', userController.register)

usersRouter.get('/contact', userController.contacto)


//ruta de prueba
usersRouter.get('/', userController.list)


// Rutas por POST
usersRouter.post('/register',userValidation.register,userController.storageUser)
usersRouter.post('/login', userValidation.validacionLogeo ,userController.logeo)


module.exports = usersRouter;