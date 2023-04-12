const express = require('express')
const router = express.Router()
const { NotesValidators } = require('../validators')
const { NotesControllers } = require('../controllers')
const { verifyToken } = require('../middleware')

// get all notes
router.get('/notes', NotesControllers.getAllNotes)
// get all note by Id findeOneByID
router.get('/nota/:id',NotesValidators.findOne, NotesControllers.findOne)

router.use(verifyToken) // uso de el middleware 

// add a note // Validadores, funciones
router.post('/notes', NotesValidators.create, NotesControllers.create)

// updateByIdAndUpdate // updateMany
// actualizar un valor que exista 
// crear un valor
router.patch('/nota/patch/:id', NotesValidators.findOne, NotesControllers.findOneByIdAndUpdate)

// findByIdAndDelete // borrado logico
// Es que el estaus no exist en todas las notas // agregar esa propieda a todos los documentos existentes
//



module.exports = router