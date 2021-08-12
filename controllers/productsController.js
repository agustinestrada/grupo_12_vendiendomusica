const productModel = require('../models/productModel')
const productsController = {
    checkout: (req, res) =>{
            res.render('./products/productCart')
    },
    detail:(req, res) => {
        const product = productModel.findByPK
         res.render('./products/productDetail', {product} )
                    
    },
    list: (req,res) => {
        const productList = productModel.findAll()
        //console.log(productList)
        res.render('./products/productList', { productList })
    },
    create: (req,res) => {
        const product = productModel.findByPK(req.params.id);
        res.render('./products/productCreateEdit', {product}) 
    },
    store: (req,res) =>{
        //creo el objeto
        const {productName, price, category, descripcion} = req.body;
        const product = {
            productName,
            price,
            category,
            descripcion
        }
        const productCreated = productModel.create(product);
            res.redirect('./products/productsdetail/' + productCreated.id);
         },
    edit: (req, res) => {
        const product = productModel.findByPK(req.params.id);
        console.log(product)
        res.render('./products/edit', { product });
    },
    update: (req, res) =>{
        //requerimos la data del body
        const data = req.body;
        //el id no nos viene en el body, lo pedimos por params
        const { id } = req.params;

        productModel.update(data, id);

        res.redirect('/products/productsDetail/' + id);
    },
    destroy: (req, res) =>{
        const id = req.params.id;

        productModel.destroy(id);
        res.redirect('products/productsList');

    },

    }



module.exports = productsController