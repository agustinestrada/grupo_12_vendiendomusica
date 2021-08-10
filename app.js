const express = require('express')
const { exito } = require('./controllers/userController.js')
const app = express()
const port = process.env.PORT || 3050
const productsRoutes = require ('./routes/productRoutes.js')
const userRoutes = require ('./routes/UserRoutes.js')
const mainRoutes = require ('./routes/mainRoutes.js')

app.listen(port,() =>{
    console.log('El servidor se inicio correctamente en el puerto 3050');
})
// definimos la arpera que devuelve los archivos estaticos
app.use(express.static('public'))
// No olvidarse esto para que la data se envie correctamente desde un formulario
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.set('view engine', 'ejs')
app.set('views', './views')
// productos
app.use('/products', productsRoutes)
// usuarios
app.use('/user', userRoutes)
// home
app.use('/', mainRoutes)


app.use((req, res, next) => {
    res.status(404).render('404')
})