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
      .then(data => {
        res.send('Wine successfully Seeded!')
      })
      .catch(err => {
        console.error(err)
      })
  })

router.route('/:id')
  .get(wineController.findById)
  .put(wineController.update)
  .delete(wineController.remove)

module.exports = router
