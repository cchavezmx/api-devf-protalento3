const express = require('express')
const router = express.Router()

router.get('/recurso2', (req, res) => res.send('Recurso 2'))

module.exports = router