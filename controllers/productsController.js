const productsController = {
    checkout: (req, res) =>{
            res.render('./products/productCart')
    },
    detail:(req, res) => {
        res.render('./products/:id')
    },
    create: (req,res) => {
        res.render('./products/productCreateEdit')
    },
    list: (req,res) => {
        res.render('./products/productList')
    }

}
module.exports = productsController