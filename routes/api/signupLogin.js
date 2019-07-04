const router = require('express').Router()
const userController = require('../../controllers/userController')
const passport = require('../../passport')
const db = require('../../models')

router.route('/getUser')
  .get(userController.getUser)

router.route('/signup')
  .post(userController.signup)

// router.post('/login', function (req, res, next) {
//   passport.authenticate('local', function (err, user) {
//     if (err) {
//       console.log('err')
//       return next(err)
//     }
//     if (!user) {
//       console.log('!user')
//       return res.json('No User')
//     }
//     console.log('!!user')
//     return res.json(user)
//
//   })(req, res, next)
// })

router.post('/login', passport.authenticate('local'), function (req, res) {
  console.log('REQ.USER: ', req.user)
  res.json(req.user)
})

router.route('/logout')
  .post(userController.logout)

module.exports = router
