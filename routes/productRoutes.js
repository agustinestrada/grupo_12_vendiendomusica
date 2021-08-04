const express = require('express')
const productsRouter = express.Router()
const productsController = require('../controllers/productsController')

productsRouter.get('/productCart', productsController.checkout )
productsRouter.get('/productDetail/:id', productsController.detail )
productsRouter.get('/productCreate', productsController.create )
productsRouter.get('/productList', productsController.list )


module.exports = productsRouter;