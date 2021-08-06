const { json } = require("express")
const fs = require('fs')
const jsonFile = JSON.parse(fs.readFileSync('./data/products.json'))
/*esto es lo mismo que esto
aca lee el archivo  const file = fs.readFileSync(__dirname + '/productsData.json')
aca lo parsea       const jsonFile = JSON.parse(file)
*/
module.exports = {
    findAll() {
        //devuelve todos los productos
        return jsonFile.products
    },
    findByPK(id) {
        //devuleve un producto por id
        return jsonFile.products.find(product =>
            Number(products.id) === Number(id)
        )
    }
}