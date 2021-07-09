let userController = {
    login: (req, res) => {
        res.render('./user/login')
    },
    register: (req, res) => {
        res.render('./user/register')
    },
    exito: (req, res, next) =>{
        res.redirect('/exito')
    }
}

module.exports = userController
