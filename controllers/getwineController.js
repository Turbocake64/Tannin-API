const db = require('../models')

module.exports = {
  getwine: function (req, res) {
    // Find all users
    db.Restaurants.findOne({ _id: req.body.restaurantId })
    // Specify that we want to populate the retrieved users with any associated notes
      .populate('Wines')
      .populate('Employees')
      .then(function (dbUser) {
        console.log(dbUser)
        // If able to successfully find and associate all Users and Notes, send them back to the client
        res.json(dbUser)
      })
      .catch(function (err) {res.json(err)})
  }
}
