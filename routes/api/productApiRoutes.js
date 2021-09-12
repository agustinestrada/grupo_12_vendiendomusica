const express = require('express')
const productApiRoutes = express.Router()
const productApiController = require('../../controllers/api/productApiController')

//rutas por get
productApiRoutes.get('/list',productApiController.list)
productApiRoutes.get('/:id',productApiController.detail)




module.exports = productApiRoutes