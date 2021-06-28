let productosController = {
    checkout: (req, res) =>{
            res.render('./products/productCart')
    },
    detail:(req, res) => {
        res.render('./products/productDetail')
    }
}

module.exports = productosController