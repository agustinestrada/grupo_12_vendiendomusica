let productosController = {
    checkout: (req, res) =>{
            res.render('./products/productCart')
    },
    detail:(req, res) => {
        res.render('./products/productDetail')
    },
    create: (req,res) => {
        res.render('./products/productCreateEdit')
    },
    list: (req,res) => {
        res.render('./products/productList')
    }

}
module.exports = productosController