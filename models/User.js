const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    require: true
  },  
}, {
  timestamps: true
})

// middleware
// https://mongoosejs.com/docs/middleware.html
// no puede ser una funciona flecha
userSchema.pre('save', function(next){
  // programacion Orientada a objetos de Clases
   const user = this
   const SALT = 10

  if(!user.isModified('password')) return next() // nos aseguramos que solo cuando se cambie el password se pueda generar un nuevo has
   
  return bcrypt.hash(user.password, SALT, function(err, has){

    if(err) {
      return next()
    }

    user.password = has
    return next()
  })
   
})


const User = mongoose.model('User', userSchema)
module.exports = User