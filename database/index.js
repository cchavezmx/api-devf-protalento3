const mongoose = require('mongoose')

const URL = process.env.MONGO_URL

// conexión con mongoose
mongoose.connect(URL)
    .then(() => console.log('Conectado a la base de datos'))
    .catch((error) => console.log(error))
