const bcrypt = require('bcrypt')
const jwt = require('jsonwebtoken')


module.exports = {
  comparePasword: (hasPassword, reqPassword) => {
    const match = bcrypt.compareSync(reqPassword, hasPassword) 
    // Boolean
    return match
  }, 
  createToken: (usuario) => {

    const payload = {
      id: usuario._id,
      email: usuario.email,
      name: usuario.name,
      exp: Math.floor(Date.now() / 1000) + (60 * 60) // 1 hora
    }

    try {
      const token = jwt.sign(payload, process.env.SECRET_KEY)
      return token
    } catch (error) {
      return error
    }
  },
  verifyToken: (req, res, next) => {
    try {
      const { authorization } = req.headers
      
      if (!authorization) {
        throw new Error('No hay token')
      }
      
      console.log(authorization)
      const [type, token] = authorization.split(' ')      
      
      jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
          throw new Error('Token no valido')
        }
        
        req.decoded = decoded
        next()
      })      
      
    } catch (error) {
      console.log("🚀 ~ file: index.js:48 ~ error:", error)
      res.status(401).json({ message: 'Auth error', error: error.message })
    }
  }
}