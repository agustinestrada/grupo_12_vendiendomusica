module.exports = (req, res, next)=>{
    res.locals.isLogged = false

    if(req.session.usuarioLogeado){
        res.locals.isLogged = req.session.usuarioLogeado
    }

  next()
}