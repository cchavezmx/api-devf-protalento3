const { UserService } = require('../services')
const { comparePasword, createToken } = require('../utils')

module.exports = {
  create: async (req, res) => {
    try {
      
      const newUser = await UserService.create(req.body)

      if(!newUser) {
        return res.status(400).json({ message: 'Error al crear el usuario'})
      }

      return res.status(200).json({ message: `Usario creado con el id ${newUser._id}`  })

    } catch (error) {
      return res.status(400).json({ error })
    }
  },
  login: async (req, res) => {
    console.log(req.body)
    try {
      // 1. - comprobar que el usario exista
              // traernos su contraseña de la base de datos has (encriptada)

      const isUser = await UserService.getUserByEmail(req.body.email)

      if (!isUser) {
        throw new Error('Error en las credenciales')
      }
      
      // 2. - comparar el password que manda en usario con el password que tengo en la base de datos
      const isValidPassword = comparePasword(isUser.password, req.body.password)
      
      if (!isValidPassword) {
        throw new Error('Error en las credenciales')
      }

      // 3. - Generar un token 
      const token = createToken(isUser)
      // 4. - Mandar el token en el servicio
      if (!token) {
        return res.status(400).json({ message: 'Error al generar el token' })
      }
      
      return res.status(200).json({ message: {
        token,
        id: isUser._id,
        name: isUser.name,
        email: isUser.email,
        token
      } })

    } catch(error) {
      console.log("🚀 ~ file: UserControllers.js:42 ~ login: ~ error:", error)
      return res.status(400).json({ error: error.message })  
    }
  }
}
