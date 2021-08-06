const productModel = require('../models/productModel')
const productsController = {
    checkout: (req, res) =>{
            res.render('./products/productCart')
    },
    detail:(req, res) => {
        const product = productModel.findByPK
        res.render('./products/:id')
    },
    create: (req,res) => {
        res.render('./products/productCreateEdit')
    },
    list: (req,res) => {
        const productList = productModel.findAll()
        //console.log(productList)
        res.render('./products/productList', { productList }) 
    }


}
module.exports = productsController