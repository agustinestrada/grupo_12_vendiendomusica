const express = require('express')
const usersRouter = express.Router()
const userController = require('../controllers/userController')

// Rutas por GET
usersRouter.get('/login', userController.login)
usersRouter.get('/register', userController.register)
usersRouter.get('/contact', userController.contacto)

// Rutas por POST
usersRouter.post('/register',userController.storageUser)
usersRouter.post('/login',userController.logeo)


module.exports = usersRouter;