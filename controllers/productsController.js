let productosController = {
    checkout: (req, res) =>{
            res.render('productCart')
    },
    detail:(req, res) => {
        res.render('productDetail')
    }
}

module.exports = productosController