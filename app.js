const express = require('express')
const app = express()
const path = require('path')
const pathViews = path.join(__dirname + '/src/views')
const port = process.env.PORT || 3030

app.use(express.static('public'))

app.listen(port,() =>{
    console.log('tamo re activo papi');
})

app.get('/', (req, res) => {
    res.sendFile(path.join(pathViews + '/index.html'))
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(pathViews + '/login.html'))
})

app.get('/register', (req, res) => {
    res.sendFile(path.join(pathViews + '/register.html'))
})

app.get('/productCart', (req, res) => {
    res.sendFile(path.join(pathViews + '/productCart.html'))
})

app.get('/productDetail', (req, res) => {
    res.sendFile(path.join(pathViews + '/productDetail.html'))
})

app.use((req, res, next) => {
    res.status(404).sendFile(pathViews + '/404.html')
})
