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
        res.render('./products/productCreateEdit') 
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

    }



module.exports = productsController