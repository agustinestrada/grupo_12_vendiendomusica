module.exports = (req, res, next)=>{
    if(req.session.usuarioLogeado != undefined){
        res.redirect('/user/profile')
    }
    next()
}