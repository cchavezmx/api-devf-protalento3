const express = require('express')
const router = express.Router()
const { NotesValidators } = require('../validators')
const { NotesControllers } = require('../controllers')
const { verifyToken} = require('../utils')

// add a note // aut, Validadores, funciones


router.use(verifyToken)
router.post('/notes', NotesValidators.create, NotesControllers.create)

// get all notes
router.get('/notes', NotesControllers.getAllNotes)

// get all note by Id

module.exports = router