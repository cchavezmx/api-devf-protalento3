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

      const allnotes = await Note.find({})
      return allnotes

    } catch (error) {
      throw new Error('Error al leer todos las notas')
    }
  }
}