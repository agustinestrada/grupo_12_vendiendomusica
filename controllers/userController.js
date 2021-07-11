let userController = {
    login: (req, res) => {
        res.render('./user/login')
    },
    register: (req, res) => {
        res.render('./user/register')
    },
    contacto: (req, res) => {
        res.render('./user/contact')
    }
}

module.exports = userController
