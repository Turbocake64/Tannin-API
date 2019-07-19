const router = require('express').Router()
const userController = require('../../controllers/userController')
const passport = require('../../passport')

router.route('/getUser')
  .get(userController.getUser)

router.route('/signup')
  .post(userController.signup)

router.post('/login', passport.authenticate('local'), function (req, res) {
  console.log('signupLogin req.user: ', req.user)
  res.json(req.user)
})

router.route('/logout')
  .post(userController.logout)

module.exports = router
