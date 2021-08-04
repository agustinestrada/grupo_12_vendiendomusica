const express = require('express')
const usersRouter = express.Router()
const userController = require('../controllers/userController')

usersRouter.get('/login', userController.login)

usersRouter.get('/register', userController.register)

usersRouter.get('/contact', userController.contacto)



module.exports = usersRouter;