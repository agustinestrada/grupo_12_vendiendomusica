const fs = require('fs')
const path = require('path')
const db = require('../database/models/index')
const Op = db.Sequelize.Op



const mainRoutesController = {
    home: (req, res) => {
        res.render('index')
    },
    cargaExitosa: (req, res) => {
        res.render('exito')
    }
}

module.exports = mainRoutesController