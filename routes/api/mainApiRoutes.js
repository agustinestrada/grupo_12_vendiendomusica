const express = require('express')
const apiRoutes = express.Router()
const productApiRoutes = require('./productApiRoutes.js')
const userApiRoutes = require('./userApiRoutes.js')

apiRoutes.use('/products', productApiRoutes)
apiRoutes.use('/users', userApiRoutes)


module.exports = apiRoutes
