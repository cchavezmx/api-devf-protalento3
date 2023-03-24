const mongoose = require('mongoose')
const { MONGO_URI } = require('../config')

// conexión con mongoose
mongoose.connect(MONGO_URI)
    .then(() => console.log('Conectado a la base de datos'))
    .catch((error) => console.log(error))
