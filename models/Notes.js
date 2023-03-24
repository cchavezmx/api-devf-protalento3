const mongoose = require('mongoose')
// driver para conectarnos a la base de datos

// El esquema le dice a Mongoose cómo se almacenarán los objetos de nota en la base de datos.
const notaSchema = new mongoose.Schema({
  titulo: {
    type: String,
    required: true
  },
  contenido: {
    type: String,
    required: true
  },  
  fecha: {
    type: String,
    required: true
  }
}, {
  timestamps: true
})

const Note = mongoose.model('Note', notaSchema)

module.exports = Note