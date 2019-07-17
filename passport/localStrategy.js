const db = require('../models')
const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password'
  },
  function (email, password, done) {
    // console.log('LocalStrategy email: ' + email)
    db.Employees.findOne({ email: email }, (err, userMatch) => {
      // console.log('LocalStrategy userMatch', userMatch)
      if (err) {
        return done(err)
      }
      if (!userMatch) {
        return done(null, false, { message: 'Incorrect email' })
      }
      console.log('pwd')
      if (!userMatch.checkPassword(password)) {
        return done(null, false, { message: 'Incorrect password' })
      }
      console.log('done')
        return done(null, userMatch)
    }).then(function (data) {
      console.log('LocalStrategy .then data', data)
    })
  }
)

module.exports = strategy
