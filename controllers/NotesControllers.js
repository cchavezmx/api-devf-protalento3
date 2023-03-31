const { NotesService } = require('../services')
// DENTRO DE LOS CONTROLADORES DEBE IR LA LOGICA DEL NEGOCIO
// buscar notas por id,
// eliminar notas 
// actualziar notas
//  - Solo puedes eliminar tus propias notas o donde estas comentado
//  

module.exports = {
  create: async (req, res) => {    
    try {           
      const newNote = await NotesService.create(req.body)
      if(!newNote) {
        // return res.status(401).json({ error: 'No se pudo crear la data'})
        throw new Error('No se pudo crear la nota')
      }

      return res.status(200).json({ message: newNote })

    } catch (error) {
      return res.status(400).json({ error })
    }
  },
  getAllNotes: async (req, res) => {
    try {

      const allnotes = await NotesService.getAllNotes()
      return res.status(200).json({ message: allnotes })

    } catch (error) {
      return res.status(400).json({ error })
    }
  }
}