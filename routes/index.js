const express = require('express')
const router = express.Router()
const { Note } = require('../models')

// add a note
router.post('/notes', (req, res) => {
  const note = new Note({
      titulo: req.body.titulo,
      contenido: req.body.contenido,
      fecha: new Date()
  })

note.save()
  .then(result => {
      res.status(200).json(result)
  })
  .catch(err => {
      res.status(500).json(err)
  })
})

module.exports = router