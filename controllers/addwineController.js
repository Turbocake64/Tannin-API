const db = require('../models')

// change MasterWineList to Restaurants to access models Restaurants collection
module.exports = {

  // ----------dms
  update: function (req, res) {
    console.log(req.body)
    db.Restaurants.findOneAndUpdate({}, { $push: { Wines: req.body.Wines } }, { new: true })
      // db.Restaurants.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbResto => res.json(dbResto))
      .catch(err => res.status(422).json(err))
  },

  remove: function (req, res) {
    console.log(req.body)

    db.Restaurants.findOneAndUpdate({},
      { '$pull': { 'Restaurants.$.Wines': req.body } }
    )
    // db.Restaurants.update(
    //   { _id: req.body },
    //   { $pull: { Wines: req.body  } }
    // )
    // db.Restaurants.findOneAndDelete({}, { $pull: { Wines: req.body.Wines } })
    // db.Restaurants.findOneAndUpdate({ id: req.params.id }, req.body)
      .then(dbResto => res.json(dbResto))
      .catch(err => res.status(422).json(err))
  },
  addWine: function (req, res) {
    const { Wines, restaurantId } = req.body
    console.log('////////////////')
    console.log(req.body)
    console.log('////////////////')
    db.Restaurants.findOne({ _id: restaurantId }).then(wine => {
      console.log('((((((((((((((((((((')
      console.log(wine.Wines)
      console.log('))))))))))))))))))))))')
      console.log(wine.$)
      if (!wine.Wines.includes(Wines)) {
        db.Restaurants.findOneAndUpdate({ _id: restaurantId }, { $push: { Wines: Wines } }, { new: true })
          .then(data => {
            console.log(data)

            res.json(data)
          })
      } else {
        res.json('This wine already exists')
      }
    })
    // db.Restaurants.findOneAndUpdate({_id:newEmployee.restaurantId}, {$push: {employees:newEmployee._id}},{new: true}).then(data=>{
    //     console.log(data);
    //     res.json(data);
    // })
    // .catch(function (err) {
    //     // If an error occurs, send it back to the client
    //     res.json(err);
    // });

    // Specify that we want to populate the retrieved users with any associated notes
  }

}
