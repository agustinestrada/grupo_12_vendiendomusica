const express = require('express')
const productsRouter = express.Router()
const multer = require('multer');
const path = require('path');

const validationCreateProduct = require('../middlewares/validationCreateProduct')

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const destinationPath = path.join(__dirname, '../public/img/prodIMG');
        cb(null, destinationPath)
    },
    filename: (req, file, cb) => {
        const extension = path.extname(file.originalname);
        const now = Date.now();
        const fileName = now +  extension
        cb(null, fileName)
    }
})
const upload = multer({ storage })

const productsController = require('../controllers/productsController')

productsRouter.get('/productCart', productsController.checkout )
productsRouter.get('/detail/:id', productsController.detail )
productsRouter.get('/list', productsController.list )
//Create
productsRouter.get('/create', productsController.create )
productsRouter.post('/create',upload.single('imagen'),validationCreateProduct, productsController.store )
//update
productsRouter.get('/:id/edit', productsController.edit);
productsRouter.post('/:id',upload.single('imagen'), productsController.update);
//delete
productsRouter.delete('/:id', productsController.destroy)


module.exports = productsRouter;