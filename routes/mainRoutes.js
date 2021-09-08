const { localsName } = require('ejs')
const express = require('express')
const router = express.Router()
const mainRoutesController = require('../controllers/mainRoutesController')

router.get('/', mainRoutesController.home)
router.post('/exito', mainRoutesController.cargaExitosa)



//Ruta prueba Session

router.get('/session',(req,res)=>{
    
    if(req.session.numeroVisitas == undefined){
        req.session.numeroVisitas = 1
    }else{
        req.session.numeroVisitas++
    }

    res.send('El Numero de Session es ' + req.session.numeroVisitas)
})

router.get('/holis',(req,res)=>{
    res.send('El Numero de Session es ' + req.session.numeroVisitas)
})


module.exports = router