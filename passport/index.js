const passport = require('passport')
const LocalStrategy = require('./localStrategy')
const User = require('../models/Employees')

passport.serializeUser((user, done) => {
  done(null, { _id: user._id })
})

passport.deserializeUser((id, done) => {
  User.findOne(
    { _id: id },
    'firstName lastName email restaurantName restaurantId scores',
    (err, user) => {
      done(null, user)
    }
  )
})

passport.use(LocalStrategy)

module.exports = passport
