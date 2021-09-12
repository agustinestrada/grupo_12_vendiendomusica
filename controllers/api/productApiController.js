const {Producto} = require('../../database/models/index')

module.exports = {
    list: async(req,res)=>{
        listadoProductos = await Producto.findAll()

        res.send(listadoProductos)
    },
    detail: async (req, res)=>{
        const producto = await Producto.findByPk(req.params.id)

        res.json(producto)
    }
}