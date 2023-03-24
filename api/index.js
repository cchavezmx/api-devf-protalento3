const express = require('express')
const cors = require('cors')

const api = express();
const PORT = process.env.PORT || 3000;

api.use(cors())
// que url no solicito el servicio => /
// VALIDAR WHITELIST SOLO LOS DOMINIOS AUTORIZADOS PARA CONECTARSE
// PARSER EXPRESS
api.use(express.urlencoded({ extended: true }))
api.use(express.json({ extended: true }))

// INICIALIZAR MIS RUTAS
api.get('/', (req, res) => res.send('Hola mundo'))
api.use('/api/v1', require('../routes'))

module.exports = { api, PORT }