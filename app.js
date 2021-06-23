const express = require('express')
const path = require('path')
const port = process.env.PORT || 3030
const productsRoutes = require ('./src/routes/product.js')

const app = express()

app.listen(port,() =>{
    console.log('El servidor se inicio correctamente');
})

app.use('/products', productsRoutes)

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname + '/src/views/index.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname + '/src/views/login.html'))
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(__dirname + '/src/views/register.html'))
})

//ejs en nuestro proyecto
app.set('view engine', 'ejs');
