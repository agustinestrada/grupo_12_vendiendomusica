//const productModel = require('../models/productModel')
const db = require('../database/models/index')
//const { fileName } = require('../models/productModel')
const { validationResult } = require('express-validator')

const productsController = {
    checkout: (req, res) =>{
            res.render('./products/productCart')
    },
    detail:(req, res) => {
        db.Producto.findByPk(req.params.id)
            .then(function(producto){
                res.render('./products/Detail', {producto})
            })
    },
    list: (req,res) => {
        db.Producto.findAll()
            .then(function(productList){
                res.render('./products/list', { productList })
                    }
                )    
    },
    create: (req,res) => {
        res.render('./products/create') 
    },
    store: (req,res) =>{
       // imagen = '/img/prodIMG' + Date.now() + req.file.originalname.slice(-4)
       const formValidation = validationResult(req)
       //si encuentro un error devuelvo el formulario con los valores cargados y los errores
       if (!formValidation.isEmpty()){
        //errores
        const oldValues = req.body
        res.render('./products/create', {oldValues, errors: formValidation.mapped()}) 

        return    
       }
        db.Producto.create({
            nombre: req.body.nombre,
            precio:req.body.precio,
            categoria:req.body.categoria,
            imagen:req.file.filename ,
            descripcion:req.body.descripcion
        })
        .then(function(product){
            res.redirect('/products/list')
        })
        .catch(function(error){
            res.send(error)
        })
        },
    edit: (req, res) => {
            db.Producto.findByPk(req.params.id)
                .then(product=> {
                    res.render('./products/edit', { product })
                })
    },
    update: (req, res) =>{

        db.Producto.update({
            nombre: req.body.nombre,
            precio:req.body.precio,
            categoria:req.body.categoria,
            imagen: req.filename,
            descripcion:req.body.descripcion
        })
        .then((producto)=>{
            res.redirect('/products/detail/' + req.params.id, {producto})
        })
    },
    destroy: (req, res) =>{
        const id = req.params.id

        db.Producto.destroy({
            where: {id}
        })
        .then(res.redirect('/products/List'))
    },

    }



module.exports = productsController