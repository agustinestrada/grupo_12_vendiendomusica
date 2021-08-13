const { json } = require("express")
const fs = require('fs')
const path = require('path')
//const jsonFile = JSON.parse(fs.readFileSync('./data/products.json'))
/*esto es lo mismo que esto
aca lee el archivo  const file = fs.readFileSync(__dirname + '/productsData.json')
aca lo parsea       const jsonFile = JSON.parse(file)
*/
module.exports = {
    fileName: path.resolve(__dirname, '../data/products.json'),
    
    readFile() {
        const productsPath = this.fileName;
        const productsJson = fs.readFileSync(productsPath, 'utf-8');
        return JSON.parse(productsJson);
    },
    writeFile(newData){
        //Paso todo a JSON
        const dataJson = JSON.stringify(newData, null, 2) //los parametros se los pasamos para que mantenga la estructura del objeto
        //Escribo la info nueva en el JSON
        fs.writeFileSync(this.fileName, dataJson);


    },
    generateId(){
        //leo todos los productos
        const products = this.readFile();
        //tomo el ultimo producto
        const lastProduct = products.pop();
        //retorno el ultimo id y le sumo 1
        return lastProduct.id + 1
    },
    findAll() {
        //devuelve todos los productos
        //return jsonFile.products
        const products = this.readFile();
        return products
        //return this.readFile()
    },
    findByPK(id) {
        //devuleve un producto por id
        const products = this.readFile();
        const productFound = products.find(product => product.id == id);
        //return jsonFile.products.find(product =>
        //    Number(products.id) === Number(id)
        //)
        return productFound;
    },
     create(product){
        //genero un nuevo id
        product.id = this.generateId();
        //Leo el archgivo
        const products = this.readFile();
        //Agrego el producto al array de productos
        const productsUdated = [...products, product];
        //Vuelvo a escribir el archivo con el nuevo array de productos
        this.writeFile(productsUdated);
        return product;
    },
    update(data, id) {
        //leer los productos
        const products = this.readFile();
        const newProdutcs = products.map(product =>{
            if(product.id == id){
                product = {
                    id: planet.id,
                    ...data
                }
            }
            return product;
        });

        this.writeFile(newProdutcs);

    },
    destroy(id){
        const products = this.readFile();

        const newProducts = products.filter(product => product.id != id);
        this.writeFile(newProducts);
    }

}
