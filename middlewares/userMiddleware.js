const fs = require('fs')

function userMiddleware(req, res, next){
    fs.appendFileSync('user.txt', ' se ingreso en la ruta de usuarios ' + req.url)

    next()
}

module.exports = userMiddleware