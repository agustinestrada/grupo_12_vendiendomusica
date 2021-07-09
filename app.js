const express = require('express')
const { exito } = require('./controllers/userController.js')
const app = express()
const port = process.env.PORT || 3050
const productsRoutes = require ('./routes/product.js')
const userRoutes = require ('./routes/user.js')
const mainRoutes = require ('./routes/main.js')

app.listen(port,() =>{
    console.log('El servidor se inicio correctamente');
})

app.use(express.static('public'))

app.set('view engine', 'ejs');

app.use('/products', productsRoutes)
app.use('/user', userRoutes)
app.use('/', mainRoutes)


app.use((req, res, next) => {
    res.status(404).render('404')
})