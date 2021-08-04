const express = require('express')
const { exito } = require('./controllers/userController.js')
const app = express()
const port = process.env.PORT || 3050
const productsRoutes = require ('./routes/productRoutes.js')
const userRoutes = require ('./routes/mainRoutes.js')
const mainRoutes = require ('./routes/mainRoutes.js')

app.listen(port,() =>{
    console.log('El servidor se inicio correctamente');
})
// definimos la arpera que devuelve los archivos estaticos
app.use(express.static('public'))

app.set('view engine', 'ejs');

// productos
app.use('/products', productsRoutes)
// usuarios
app.use('/user', userRoutes)
// home
app.use('/', mainRoutes)


app.use((req, res, next) => {
    res.status(404).render('404')
})