const mainRoutesController = {
    home: (req, res) => {
        res.render('index')
    },
    cargaExitosa: (req, res) => {
        res.render('exito')
    }
}

module.exports = mainRoutesController