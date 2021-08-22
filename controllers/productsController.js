const productModel = require('../models/productModel')
const db = require('../database/models/index')

const productsController = {
    checkout: (req, res) =>{
            res.render('./products/productCart')
    },
    detail:(req, res) => {
        db.Producto.findByPk(req.params.id)
            .then(function(detalle){
                res.render('./products/Detail', {detalle})
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
        const product = productModel.findByPK(req.params.id);
        res.render('./products/create', {product}) 
    },
    store: (req,res) =>{
         
        const image ='/img/prodIMG/' + req.file.filename

        //creo el objeto
        const {name, price, category, descripcion} = req.body;
        const product = {
            name,
            price,
            category,
            image,
            descripcion
        }
        const productCreated = productModel.create(product);
            res.redirect('./Detail/' + productCreated.id);
        },
    edit: (req, res) => {
        const product = productModel.findByPK(req.params.id);
        
        res.render('./products/edit', { product });
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