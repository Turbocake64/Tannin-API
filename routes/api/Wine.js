const router = require('express').Router()
const wineController = require('../../controllers/wineControllers')
const db = require('../../models')
const wineSeed = require('../../Seedin').wineSeed

// defining our root route or "/"
router.route('/')
  .get(wineController.findAll)
  .post(wineController.create)

router.route('/wineseed')
  .get(function (req, res) {
    db.MasterWineList.collection.deleteMany({})
      .then(() => db.MasterWineList.collection.insertMany(wineSeed))
      .then(() => {
        res.send('Wine successfully Seeded!')
      })
      .catch(err => {
        console.error(err)
      })
  })

router.route('/:id')
  .get(wineController.findById).catch(err => {
    console.error(err)
  })
  .put(wineController.update).catch(err => {
    console.error(err)
  })
  .delete(wineController.remove).catch(err => {
    console.error(err)
  })

module.exports = router
