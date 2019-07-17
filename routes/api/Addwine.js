const router = require('express').Router()
const addwineController = require('../../controllers/addwineController')

// defining our root route or "/"
router.route('/')
  .put(addwineController.addWine)

  .put(addwineController.update)

  .delete(addwineController.remove)

module.exports = router
