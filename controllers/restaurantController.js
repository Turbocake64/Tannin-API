const db = require('../models')
const transporter = require('../nodemailer')

// change MasterWineList to Restaurants to access models Restaurants collection
module.exports = {
  findAll: function (req, res) {
    db.Restaurants.find()
      .then(dbResto => res.jstus(422).json(err))
  },

  // DMS -- RESTAURANT MODEL
  create: function (req, res) {
    db.Restaurants.create(req.body)
      .then(dbResto => res.json(dbResto))
      .catch(err => res.status(422).json(err))
  },
  // --------------------

  findById: function (req, res) {
    db.Restaurants.findById(req.params.id)
      .then(dbResto => res.json(dbResto))
      .catch(err => res.status(422).json(err))
  },

  // update: function(req, res) {
  //     db.Restaurants.findOneAndUpdate({ id: req.params.id }, req.body)
  //       .then(dbResto => res.json(dbResto))
  //       .catch(err => res.status(422).json(err));
  // },

  // ----------dms
  update: function (req, res) {
    db.Restaurants.findOneAndUpdate({}, { $push: { Wines: req.body._id } }, { new: true })
      // db.Restaurants.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbResto => res.json(dbResto))
      .catch(err => res.status(422).json(err))
  },

  // ---------------------------
  //   remove: function(req, res) {
  //     db.Restaurants.remove()(req.params.id)
  //       .then(dbResto => dbResto.remove())
  //       .then(dbResto => res.json(dbResto))
  //       .catch(err => res.status(422).json(err));
  // }

  remove: function (req, res) {
    console.log(req.body)
    const { id, restaurantId } = req.body
    console.log(restaurantId)
    db.Restaurants.update({ _id: restaurantId }, { $pull: { Wines: id } }).then(restaurant => {
      console.log('?????????????')
      console.log(restaurant)
      console.log('?????????????')
      // res.json(restaurant);

      res.json(restaurant)
    })
  }
}
