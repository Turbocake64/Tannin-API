const db = require('../models')

module.exports = {
  findAll: function (req, res) {
    db.Restaurants.find()
      .then(dbResto => res.json(dbResto))
      .catch(err => res.status(422).json(err))
  },

  findById: function (req, res) {
    db.Restaurants.findById(req.params.id)
      .then(dbResto => res.json(dbResto))
      .catch(err => res.status(422).json(err))
  },

  create: function (req, res) {
    db.Restaurants.create(req.body)
      .then(dbResto => res.json(dbResto))
      .catch(err => res.status(422).json(err))
  },

  update: function (req, res) {
    db.Restaurants.findOneAndUpdate({}, { $push: { Wines: req.body._id } }, { new: true })
      .then(dbResto => res.json(dbResto))
      .catch(err => res.status(422).json(err))
  },

  remove: function (req, res) {
    const { id, restaurantId } = req.body
    db.Restaurants.update({ _id: restaurantId }, { $pull: { Wines: id } }).then(restaurant => {
      res.json(restaurant)
    })
  }
}
