const { User } = require('../models')


module.exports = {
  create: async (payload) => {
    const { name, email, password } = payload
      const user = new User({
        name, 
        email,
        password
      })

      const newUser = await user.save()

      if (!newUser) {
        throw new Error('Error al crear el usuario')
      }

      return newUser
  },
  getUserByEmail: async(email) => {
    try {

    const [isExist] = await User.find({ email })

    if (!isExist) {
      throw new Error('No existe el usario')
    }

    return isExist

    } catch (error) {
      console.log(error)
      throw new Error(error.message)
    }
  }
}