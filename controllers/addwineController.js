const db = require('../models')

module.exports = {
  update: function (req, res) {
    console.log(req.body)
    db.Restaurants.findOneAndUpdate({}, { $push: { Wines: req.body.Wines } }, { new: true })
      .then(dbResto => res.json(dbResto))
      .catch(err => res.status(422).json(err))
  },

  remove: function (req, res) {
    db.Restaurants.findOneAndUpdate({}, { '$pull': { 'Restaurants.$.Wines': req.body } })
      .then(dbResto => res.json(dbResto))
      .catch(err => res.status(422).json(err))
  },

  addWine: function (req, res) {
    const { Wines, restaurantId } = req.body
    db.Restaurants.findOne({ _id: restaurantId }).then(wine => {
      if (!wine.Wines.includes(Wines)) {
        db.Restaurants.findOneAndUpdate({ _id: restaurantId }, { $push: { Wines: Wines } }, { new: true })
          .then(data => { res.json(data) })
      } else {
        res.json('This wine already exists')
      }
    })
  }
}
