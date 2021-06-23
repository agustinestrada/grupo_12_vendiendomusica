const express = require('express')

const router = express.Router()

const products = require('../controllers/productsController.js')

router.get('/productCart', products.list )

router.get('/productDetail', products.detail )

module.exports = router;