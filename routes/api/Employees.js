const router = require('express').Router()
const employeeController = require('../../controllers/employeeController')

// defining our root route or '/'
router.route('/')
  .get(employeeController.findAll)
  .post(employeeController.create)

router.route('/score')
  .put(employeeController.addScore)

router
  .route('/:id')
  .get(employeeController.findById)
  .put(employeeController.update)
  .delete(employeeController.remove)

module.exports = router
