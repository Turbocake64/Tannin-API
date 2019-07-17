const express = require('express')
const app = express()
const cors = require('cors')
const session = require('express-session')
const mongoose = require('mongoose')
// const MongoStore = require('connect-mongo')(session)
// const db = require('./models/Employees')
const passport = require('./passport')
const routes = require('./routes')
const PORT = process.env.PORT || 3001

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())

app.use(routes)

const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/tannin-dev'
mongoose.connect(MONGODB_URI, { useNewUrlParser: true })

// console.log(db)
// app.use(
//   session({
//     secret: process.env.APP_SECRET || 'this is the default passphrase',
//     store: new MongoStore({ mongooseConnection: db }),
//     resave: false,
//     saveUninitialized: false
//   }))

app.listen(PORT, function () {
  console.log(
    '==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.',
    PORT,
    PORT
  )
})
