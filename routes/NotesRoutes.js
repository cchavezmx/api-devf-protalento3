const express = require('express')
const router = express.Router()
const { NotesValidators } = require('../validators')
const { NotesControllers } = require('../controllers')

// add a note // Validadores, funciones
router.post('/notes', NotesValidators.create, NotesControllers.create)

// get all notes
router.get('/notes', NotesControllers.getAllNotes)

// get all note by Id



module.exports = router