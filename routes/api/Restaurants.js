const router = require('express').Router()
const restaurantController = require('../../controllers/restaurantController')
const db = require('../../models')
const restaurantSeed = require('../../RestaurantSeed').restaurantSeed

// defining our root route or "/"
router.route('/')
  .get(restaurantController.findAll)
  .post(restaurantController.create)
  .put(restaurantController.update)

router.route('/restaurantseed')
  .get(function (req, res) {
    db.Restaurants.remove({})
      .then(() => db.Restaurants.collection.insertMany(restaurantSeed))
      .then(data => {
        res.send('Restaurants successfully Seeded!')
      })
      .catch(err => {
        console.error(err)
      })
  })

router.route('/:id')
  .get(restaurantController.findById)
  // .put(restaurantController.update)
router.route('/delete')
  .put(restaurantController.remove)

module.exports = router
