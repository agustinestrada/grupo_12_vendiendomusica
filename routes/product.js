const express = require('express')
const router = express.Router()
const products = require('../controllers/productsController')

router.get('/productCart', products.checkout )

router.get('/productDetail', products.detail )

module.exports = router;