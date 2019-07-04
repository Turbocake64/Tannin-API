const mongoose = require('mongoose')
const db = require('./models')

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/wines'
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
