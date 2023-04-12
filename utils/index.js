const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


module.exports = {
  comparePasword: (hasPassword, reqPassword) => {
    const match = bcrypt.compareSync(reqPassword, hasPassword) 
    // Boolean
    return match
  }, 
  createToken: (user) => {
    // cabezar + payload + clave secreta
    const payload = {
      id: user._id,
      name: user.name,
      email: user.email,
      exp: Math.floor(Date.now() / 1000) * (60 * 60) // 1hr //timstamp
    }

    try {
      const token = jwt.sign(payload, process.env.JWT_SECRET)
      return token
    } catch(error) {
      return error.message
    }

  }
}