const db = require('../models')
const LocalStrategy = require('passport-local').Strategy

const strategy = new LocalStrategy(
  {
    usernameField: 'email',
    passwordField: 'password'
  },
  function (email, password, done) {
    console.log('LocalStrategy: ' + email)
    db.Employees.findOne({ email: email }, (err, userMatch) => {
      console.log(userMatch)
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
      // return done(null, userMatch);
    }).then(function (data) {
      console.log(data)
    })
  }
)

module.exports = strategy
