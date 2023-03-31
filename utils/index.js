const bcrypt = require('bcrypt')


module.exports = {
  comparePasword: (hasPassword, reqPassword) => {
    const match = bcrypt.compareSync(reqPassword, hasPassword) 
    // Boolean
    return match
  }
}