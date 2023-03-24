// MONGO_URI
const NODE_ENV = process.env.NODE_ENV || 'develop'

const config = {
  develop: {
    MONGO_URI: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@devf-test.iugvtbb.mongodb.net/clase-develop?retryWrites=true&w=majority`
  },
  production: {
    MONGO_URI: `mongodb+srv://${process.env.MONGO_USER}:${process.env.MONGO_PASSWORD}@devf-test.iugvtbb.mongodb.net/clase?retryWrites=true&w=majority`
  }
}

const URL = config[NODE_ENV]
module.exports = URL