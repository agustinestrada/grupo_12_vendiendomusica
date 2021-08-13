const express = require('express')
const { exito } = require('./controllers/userController.js')
const app = express()
const port = process.env.PORT || 3050
const productsRoutes = require ('./routes/productRoutes.js')
const userRoutes = require ('./routes/UserRoutes.js')
const mainRoutes = require ('./routes/mainRoutes.js')
//esto no vi cuando llamarlos o instalarlos lo saco del proyecto planets
//Preguntarle a los profes si vienen o hay que instalarlos aparte(yo los instale por las dudas)
const logger = require('morgan');
const method = require('method-override');

app.listen(port,() =>{
    console.log('El servidor se inicio correctamente en el puerto 3050');
})
// definimos la arpera que devuelve los archivos estaticos
app.use(express.static('public'))
// No olvidarse esto para que la data se envie correctamente desde un formulario
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

//app.use(cookieParser());
//app.use(express.static(path.join(__dirname, '../public')));

//view engine setuo
app.set('view engine', 'ejs')
app.set('views', './views')

app.use(method('_method'));
app.use(logger('dev'));

// productos
app.use('/products', productsRoutes)
// usuarios
app.use('/user', userRoutes)
// home
app.use('/', mainRoutes)


app.use((req, res, next) => {
    res.status(404).render('404')
})