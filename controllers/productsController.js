//const productModel = require('../models/productModel')
const db = require('../database/models/index')
//const { fileName } = require('../models/productModel')

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

        const imagen = './img/prodIMG' + Date.now() + req.file.originalname.slice(-4)

        db.Producto.update({
            nombre: req.body.nombre,
            precio:req.body.precio,
            categoria:req.body.categoria,
            imagen: req.filename,
            descripcion:req.body.descripcion
        })
        .then((producto)=>{
            res.redirect('/products/detail/' + id, {producto})
        })
        //requerimos la data del body
        const data = req.body;
        //el id no nos viene en el body, lo pedimos por params
        const { id } = req.params;

        productModel.update(data, id);

        ;
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