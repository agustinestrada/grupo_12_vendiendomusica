const express = require('express')
const router = express.Router()
const userController = require('../controllers/userController')
const Controller = require('../controllers/productsController')

router.get('/login', userController.login)

router.get('/register', userController.register)

router.get('/contact', userController.contacto)



module.exports = router;