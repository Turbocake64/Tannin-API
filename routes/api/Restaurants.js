const router = require('express').Router()
const restaurantController = require('../../controllers/restaurantController')

// defining our root route or '/'
router.route('/')
  .get(restaurantController.findAll)
  .post(restaurantController.create)
  .put(restaurantController.update)

router.route('/:id')
  .get(restaurantController.findById)

router.route('/delete')
  .put(restaurantController.remove)

module.exports = router
