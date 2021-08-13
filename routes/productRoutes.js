const express = require('express')
const productsRouter = express.Router()
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const destinationPath = path.join(__dirname, '../../public/images');
        cb(nul, destinationPath)
    },
    filename: (req, file, cb) => {
        const extension = path.extname(file.originalname);
        const now = date.now();
        const fileName = now +  extension
        cb(null, filename)
    }
})
const upload = multer({ storage })

const productsController = require('../controllers/productsController')

productsRouter.get('/productCart', productsController.checkout )
productsRouter.get('/detail/:id', productsController.detail )
productsRouter.get('/list', productsController.list )
//Create
productsRouter.get('/create', productsController.create )
productsRouter.post('/create',upload.single('image'), productsController.store )
//update
productsRouter.get('/:id/edit', productsController.edit);
productsRouter.put('/:id',upload.single('image'), productsController.update);
//delete
productsRouter.delete('/:id', productsController.destroy)


module.exports = productsRouter;