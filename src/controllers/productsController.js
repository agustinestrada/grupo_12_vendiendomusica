let path = require('path')

let productosController = {
    list: (req, res) =>{
            res.sendFile(path.join(__dirname + '../views/productCart.html'))
    },
    detail:(req, res) => {
        res.sendFile(path.join(__dirname + '../views/productDetail.html'))
    }

}

module.exports = productosController