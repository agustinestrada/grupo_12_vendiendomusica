const express = require('express')
const usersRouter = express.Router()
const userController = require('../controllers/userController')
const userValidation = require('../middlewares/userValidationMiddleware')
const guestMiddleware = require('../middlewares/guestMiddleware')
const authMiddleware = require('../middlewares/authMiddleware')
const multer = require('multer');
const path = require('path');

const storage = multer.diskStorage({
    destination: (req, file, cb) => {
        const destinationPath = path.join(__dirname, '../public/img/profileIMG/');
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



// Rutas por GET
usersRouter.get('/login',guestMiddleware, userController.login)
usersRouter.get('/register',guestMiddleware , userController.register)
usersRouter.get('/contact', userController.contacto)
usersRouter.get('/profile',authMiddleware, userController.profile)
usersRouter.get('/logout', userController.logout)


// Rutas por POST
usersRouter.post('/register', upload.single('profilePic'), userValidation.register, userController.storageUser)
usersRouter.post('/login', userValidation.validacionLogeo ,userController.logeo)

//ruta de prueba
usersRouter.get('/', userController.list)

usersRouter.get('/session',(req, res)=>{
    res.send(req.session.usuarioLogeado)
})

module.exports = usersRouter;