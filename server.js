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
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/tannin-dev'

mongoose.connect(MONGODB_URI, { useNewUrlParser: true })

app.use(express.urlencoded({ extended: true }))
app.use(express.json())
app.use(cors())

// console.log(db)
// app.use(
//   session({
//     secret: process.env.APP_SECRET || 'this is the default passphrase',
//     store: new MongoStore({ mongooseConnection: db }),
//     resave: false,
//     saveUninitialized: false
//   }))

app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true
}))
app.use(passport.initialize())
app.use(passport.session())

// if (process.env.NODE_ENV === 'production') {
//   const path = require('path')
//   app.use('/static', express.static(path.join(__dirname, '../build/static')))
//   app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, '../build/'))
//   })
// }

app.use(routes)

app.listen(PORT, function () {
  console.log('Listening on port %s.', PORT)
})
