const {Producto} = require('../../database/models/index')

module.exports = {
    list: async(req,res)=>{
        let totalProductos = await Producto.findAndCountAll()

        res.send({
            meta:{
                total: totalProductos.count
            },
            data:{
                productos: totalProductos.rows
            }
        })
    },
    detail: async (req, res)=>{
        const producto = await Producto.findByPk(req.params.id)

        res.json(producto)
    }
}