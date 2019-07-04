const db = require('../models')

module.exports = {

  findAll: function (req, res) {
    db.MasterWineList.find()
      .then(dbWine => res.json(dbWine))
      .catch(err => res.status(422).json(err))
  },

  create: function (req, res) {
    db.MasterWineList.create(req.body)
      .then(dbWine => res.json(dbWine))
      .catch(err => res.status(422).json(err))
  },

  findById: function (req, res) {
    db.MasterWineList.findById(req.params.id)
      .then(dbWine => res.json(dbWine))
      .catch(err => res.status(422).json(err))
  },

  update: function (req, res) {
    db.MasterWineList.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbWine => res.json(dbWine))
      .catch(err => res.status(422).json(err))
  },

  remove: function (req, res) {
    db.MasterWineList.findById(req.params.id)
      .then(dbWine => dbWine.remove())
      .then(dbWine => res.json(dbWine))
      .catch(err => res.status(422).json(err))
  }
}
