const router = require('express').Router()
const getwineController = require('../../controllers/getwineController')

// defining our root route or "/"
router.route('/')
  .post(getwineController.getwine)

module.exports = router
