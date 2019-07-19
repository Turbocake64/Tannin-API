const mongoose = require('mongoose')
const Schema = mongoose.Schema

const RestaurantSchema = new Schema({
  name: {
    type: String
  },
  phone: {
    type: String
  },
  address: {
    type: String
  },
  email: {
    type: String
  },
  Wines: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the MasterWineList model
      ref: 'MasterWineList'
    }
  ],
  Employees: [
    {
      // Store ObjectIds in the array
      type: Schema.Types.ObjectId,
      // The ObjectIds will refer to the ids in the Employees model
      ref: 'Employees'
    }
  ]
})

const Restaurants = mongoose.model('Restaurants', RestaurantSchema)

module.exports = Restaurants
