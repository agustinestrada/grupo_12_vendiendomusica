const express = require('express')
const userApiRoutes = express.Router()
const userApiController = require('../../controllers/api/userApiController')

userApiRoutes.get('/', userApiController.list)
userApiRoutes.get('/:id', userApiController.detalle)

userApiRoutes.post('/', userApiController.createUser)

module.exports = userApiRoutes