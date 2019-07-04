const express = require('express')
const session = require('express-session')
const cors = require('cors')
const passport = require('./passport')
const mailer = require('nodemailer')

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors())

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(session({
  secret: 'keyboard cat',
  resave: true,
  saveUninitialized: true }))
app.use(passport.initialize())
app.use(passport.session())

// loads our connection to the mongo database
const db = require('./models/Employees')
const mongoose = require('mongoose')
const MongoStore = require('connect-mongo')(session)
const MONGODB_URI = process.env.MONGODB_URI || "mongodb://<MLRabinowitz>:<MLRpassword123>@ds245387.mlab.com:45387/heroku_lj97cfjz"

mongoose.connect(MONGODB_URI, { useNewUrlParser: true })
  .catch(err => {
    console.error(err)
  })

const routes = require('./routes')

app.use(cors());
app.use(session({secret: "keyboard cat", resave: true, saveUninitialized: true }))
app.use(passport.initialize());
app.use(passport.session());

if (process.env.NODE_ENV === 'production') {
    const path = require('path');
    // console.log('YOU ARE IN THE PRODUCTION ENV')
    app.use('/static', express.static(path.join(__dirname, '../build/static')));
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../build/'));
    })
}

app.use(routes)
// app.use(function (err, req, res, next) {
//     console.log('====== ERROR =======')
//     console.error(err.stack)
//     res.status(500)
// })

app.listen(PORT, function () {
  console.log('Listening on port %s.', PORT)
})
