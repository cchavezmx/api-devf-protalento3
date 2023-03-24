require('dotenv').config()
require('./database')
// leer variables de entorno del archivo .env

const { PORT, api } = require('./api')


api.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`)
})