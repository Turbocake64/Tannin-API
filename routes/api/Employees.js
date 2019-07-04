const router = require('express').Router()
const employeeController = require('../../controllers/employeeController')
const db = require('../../models')
const empSeed = require('../../EmployeeSeed').empSeed

// defining our root route or "/"
router.route('/')
  .get(employeeController.findAll)
  .post(employeeController.create)

router.route('/empseed')
  .get(function (req, res) {
    db.Employees.collection.insert(empSeed)
      .then(data => {
        res.send('Joe was successfully Seeded!')
      })
      .catch(err => {
        console.error(err)
      })
  })
router.route('/score')
  .put(employeeController.addScore)

router
  .route('/:id')
  .get(employeeController.findById)
  .put(employeeController.update)
  .delete(employeeController.remove)

module.exports = router
