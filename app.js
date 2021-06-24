const express = require('express')
const app = express()
const path = require('path')
const port = process.env.PORT || 3050
const productsRoutes = require ('./routes/product.js')
const userRoutes = require ('./routes/user.js')

app.listen(port,() =>{
    console.log('El servidor se inicio correctamente');
})

app.use(express.static('public'))


app.set('view engine', 'ejs');

app.get('/', (req, res) => {
    res.render('index')
})


app.use('/products', productsRoutes)
app.use('/user', userRoutes)