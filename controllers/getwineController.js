
const db = require('../models')

// change MasterWineList to Restaurants to access models Restaurants collection
module.exports = {

  // ----------dms
  getwine: function (req, res) {
    // Find all users
    console.log('////////////////')
    console.log(req.body)
    console.log('////////////////')
    db.Restaurants.findOne({ _id: req.body.restaurantId })

    // Specify that we want to populate the retrieved users with any associated notes
      .populate('Wines')
      .populate('Employees')
      .then(function (dbUser) {
        console.log(dbUser)
        // If able to successfully find and associate all Users and Notes, send them back to the client
        res.json(dbUser)
      })
      .catch(function (err) {
        // If an error occurs, send it back to the client
        res.json(err)
      })
  }
}
