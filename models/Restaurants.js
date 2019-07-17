// Require mongoose

var mongoose = require('mongoose')

var Schema = mongoose.Schema

var RestaurantSchema = new Schema({
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

var Restaurants = mongoose.model('Restaurants', RestaurantSchema)

module.exports = Restaurants
