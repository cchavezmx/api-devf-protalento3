const express = require('express')
const router = express.Router()
const { User } = require('../models')
const { UserValidator } = require('../validators')

// add a note
router.post('/create/newuser', UserValidator.create, (req, res) => {
  // saber si los datos que nos manda por body estan completos. ✅
  // saber si el usuario ya esta registrado en nuestra base de datos.
  // encriptar la contraseña. 

  const { name, email, password } = req.body

  const newUser = new User({
    name,
    email,
    password,
  })

newUser.save()
  .then(result => {    
    // delete // metodo muta el objeto...
      res.status(200).json(result)
  })
  .catch(err => {
      res.status(500).json(err)
  })
})


module.exports = router