const productModel = require('../models/productModel')
const productsController = {
    checkout: (req, res) =>{
            res.render('./products/productCart')
    },
    detail:(req, res) => {
        //Traemos el id desde la url(parametro)
        const { id } = req.params;
        const productDetail = productModel.findByPK(id)
        console.log(productDetail)
        //const id = req.params.id
        
         res.render('./products/detail', {productDetail} )
                    
    },
    list: (req,res) => {
        const productList = productModel.findAll()
        //console.log(productList)
        res.render('./products/list', { productList })
    },
    create: (req,res) => {
        const product = productModel.findByPK(req.params.id);
        res.render('./products/create', {product}) 
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
            res.redirect('./products/detail/' + productCreated.id);
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
        res.redirect('products/list');
        
    },

    }



module.exports = productsController