const db = require('../models')

// change MasterWineList to Employees to access models Employees collection

module.exports = {
  findAll: function (req, res) {
    db.Employees.find()
      .then(dbEmp => res.json(dbEmp))
      .catch(err => res.status(422).json(err))
  },

  create: function (req, res) {
    db.Employees.create(req.body)
      .then(dbEmp => res.json(dbEmp))
      .catch(err => res.status(422).json(err))
  },

  findById: function (req, res) {
    db.Employees.findById(req.params.id)
      .then(dbEmp => res.json(dbEmp))
      .catch(err => res.status(422).json(err))
  },

  update: function (req, res) {
    db.Employees.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbEmp => res.json(dbEmp))
      .catch(err => res.status(422).json(err))
  },

  remove: function (req, res) {
    db.Employees.findById(req.params.id)
      .then(dbEmp => dbEmp.remove())
      .then(dbEmp => res.json(dbEmp))
      .catch(err => res.status(422).json(err))
  },

  addScore: function (req, res) {
    var queryPromise = db.Employees.findOne({ _id: req.body.userId }).exec()
    queryPromise.then(function (data) {
      const results = data.scores
      const res1 = results.filter(dbScore => dbScore.wine === req.body.wine)
      if (res1 && res1.length > 0) {
        if (parseFloat(res1[0].score) < parseFloat(req.body.score)) {
          const queryPromise2 = db.Employees.findOneAndUpdate({ _id: req.body.userId, 'scores.wine': req.body.wine }, { $set: { 'scores.$.score': req.body.score } }, { new: true }).exec()
          queryPromise2.then(dbupdate => {
            res.json(dbupdate)
          })
        } else if (parseFloat(res1[0].score) >= parseFloat(req.body.score)) {
          res.json(data)
        }
      } else {
        const queryPromise1 = db.Employees.findOneAndUpdate({ _id: req.body.userId }, { $push: { scores: { wine: req.body.wine, score: req.body.score } } }, { new: true }).exec()
        queryPromise1.then(dbData => {
          res.json(dbData)
        })
      }
    })
  }
}
