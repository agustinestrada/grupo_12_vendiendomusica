let userController = {
    login: (req, res) => {
        res.render('./user/login')
    },
    register: (req, res) => {
        res.render('./user/register')
    },
    contacto: (req, res) => {
        res.render('./user/contact')
    },
    storageUser:(req, res) => {
        let usuario = {
            nombre: req.body.name,
            apellido:req.body.last,
            email:req.body.email,
            contraseña:req.body.password,
        }

        res.send(usuario)
    },
    logeo:(req, res) => {}





}

module.exports = userController
