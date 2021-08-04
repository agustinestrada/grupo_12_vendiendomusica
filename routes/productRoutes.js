const express = require('express')
const router = express.Router()
const products = require('../controllers/productsController')

router.get('/productCart', products.checkout )
router.get('/productDetail/:id', products.detail )
router.get('/productCreate', products.create )

router.get('/productList', products.list )


module.exports = router;