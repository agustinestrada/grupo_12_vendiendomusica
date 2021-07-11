const express = require('express')
const router = express.Router()
const mainRoutesController = require('../controllers/mainRoutesController')

router.get('/', mainRoutesController.home)
router.post('/exito', mainRoutesController.cargaExitosa)


module.exports = router