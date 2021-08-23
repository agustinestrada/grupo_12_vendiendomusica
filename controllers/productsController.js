const productModel = require('../models/productModel')
const db = require('../database/models/index')

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
        const imagen ='/img/prodIMG/' + req.file.filename

        db.Producto.create({
            nombre: req.body.nombre,
            precio:req.body.precio,
            categoria:req.body.categoria,
            imagen:imagen,
            descripcion:req.body.descripcion
        })
        .then(function(product){
            res.redirect('./list', {product})
        })
        },
    edit: (req, res) => {
            db.Producto.findByPk(req.params.id)
                .then(product=> {
                    res.render('./products/edit', { product })
                })
    },
    update: (req, res) =>{
        //requerimos la data del body
        const data = req.body;
        //el id no nos viene en el body, lo pedimos por params
        const { id } = req.params;

        productModel.update(data, id);

        res.redirect('/products/detail/' + id);
    },
    destroy: (req, res) =>{
        const id = req.params.id;

        productModel.destroy(id);
        res.redirect('./list');
        
    },

    }



module.exports = productsController