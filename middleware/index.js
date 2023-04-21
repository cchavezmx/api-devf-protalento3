const jwt = require('jsonwebtoken')


module.exports = {
  verifyToken:  (req, res, next) => {
    try {
      console.log(req.headers)
      const { authorization } = req.headers      
      const [type, token] = authorization.split(' ')

      jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
        if (err) throw new Error('authentication error')

        req.decoded = decodedToken
        next()
      })        

    } catch (error) {
      res.status(401).json({ message: 'No tienes permisos para ver este recurso', error: error.message})
    }

  }
}