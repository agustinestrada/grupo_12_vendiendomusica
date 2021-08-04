const express = require('express')
const productsRouter = express.Router()
const productsController = require('../controllers/productsController')

productsRouter.get('/productCart', products.checkout )
productsRouter.get('/productDetail/:id', products.detail )
productsRouter.get('/productCreate', products.create )
productsRouter.get('/productList', products.list )


module.exports = productsRouter;