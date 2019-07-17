const mongoose = require('mongoose')
const db = require('./models')

mongoose.connect(
  process.env.MONGODB_URI || 'mongodb://localhost/tannin-dev'
)

var restaurantSeed = [
  {
    'name': 'Tutta Bella Columbia City',
    'phone': '(206)-721-3501',
    'address': '4918 Rainier Ave S, Seattle, WA 98118',
    'email': 'tutta@bella.com',
    'Wines': [
      '5cccc0219ea7080017e4e882',
      '5cccc0219ea7080017e4e883',
      '5cccc0219ea7080017e4e884'
    ],
    'Employees': [
    ]
  },
  {
    'name': 'Olive Garden Tukwilla',
    'phone': '206) 241-4899',
    'address': '310 Strander Blvd, Tukwila, WA 98188',
    'email': 'olive@garden.com',
    'Wines': [
    ],
    'Employees': [
    ]
  }
]

module.exports = { restaurantSeed }
