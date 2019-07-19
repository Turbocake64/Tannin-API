const mongoose = require('mongoose')

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/tannin-dev'
)

const empSeed = [
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
