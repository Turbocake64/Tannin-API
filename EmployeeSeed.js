const mongoose = require('mongoose')
const db = require('./models')

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/tannin-dev'
)

var empSeed = [
  {
    'firstName': 'Joe',
    'lastName': 'Lilley',
    'email': 'joe@tutta.com',
    'isAdmin': false,
    'password': 'joe',
    'restaurantId': ''
  }
]

module.exports = { empSeed }
