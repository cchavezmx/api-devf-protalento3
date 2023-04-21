const { Note } = require("../models")

module.exports = {
  create: async (payload) => {
   try {
    const note = new Note({
      ...payload
    })

    const newNote = await note.save()    
    return newNote

   } catch (error) {
     throw new Error('No se pudo crear la nota')
   }
  },
  getAllNotes: async () => {
    try {

      const allnotes = await Note.find({ _id: id })
      return allnotes

    } catch (error) {
      throw new Error('Error al leer todos las notas')
    }
  },
  findOne: async (id) => {
    try {

      const nota = await Note.findById(id)                
      if(!nota) {
        throw new Error('No existe la nota')
      }

      return nota
      
    } catch (error) {
      throw new Error(error.message)
    }
  },
  findOneByIdAndUpdate: async(id, body) => {
    try {      
      await Note.updateOne({_id: id}, body)
    } catch (error) {
      console.log("🚀 ~ file: NotesService.js:45 ~ error:", error)
      return error
    }

  }
}