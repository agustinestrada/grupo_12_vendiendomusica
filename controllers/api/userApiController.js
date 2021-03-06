const {Usuarios} = require('../../database/models/index')
const bcrypt = require('bcryptjs')

module.exports = {
    list: async (req,res)=>{
        let usuarios = await Usuarios.findAll()
        let totalUsuarios = await Usuarios.findAndCountAll()
        //let totalUsuarios = usuarios.length

        res.json({
            meta: {
                count: totalUsuarios.count 
            },
            data: {usuarios}
        })
    },
    detalle: async (req, res)=>{
        let usuario = await Usuarios.findByPk(req.params.id)

        res.json(usuario)

    },
    createUser: async(req, res)=>{

        let {nombre, apellido, email, clave} = req.body

        let passHash = bcrypt.hashSync(clave, 10)


        let nuevoUsuario = await Usuarios.create({
            nombre,
            apellido,
            email,
            passwords: passHash
        })

        res.json(nuevoUsuario)
    }
}