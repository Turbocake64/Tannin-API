const express = require('express')
const app = express()
var cors = require('cors')
const session = require('express-session')
const MongoStore = require('connect-mongo')(session)
// loads our connection to the mongo database
const passport = require('./passport')
const db = require('./models/Employees')
const routes = require('./routes')
const PORT = process.env.PORT || 3001
const mongoose = require('mongoose')
var mailer = require('nodemailer')
const MONGODB_URI = process.env.MONGODB_URI || 'mongodb://localhost/tannin-dev'

mongoose.connect(MONGODB_URI, { useNewUrlParser: true })

app.use(express.urlencoded({ extended: true }))
app.use(express.json())

app.use(cors())
// console.log(db);
// app.use(
//     session({
//         secret: process.env.APP_SECRET || 'this is the default passphrase',
//         store: new MongoStore({ mongooseConnection: db }),
//         resave: false,
//         saveUninitialized: false
//     }))
app.use(session({ secret: 'keyboard cat', resave: true, saveUninitialized: true }))
app.use(passport.initialize())
app.use(passport.session())

if (process.env.NODE_ENV === 'production') {
  const path = require('path')
  // console.log('YOU ARE IN THE PRODUCTION ENV')
  app.use('/static', express.static(path.join(__dirname, '../build/static')))
  app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, '../build/'))
  })
}
// app.get('/',(req,res)=>(
//     db.MasterWineList.find({}).then(Wines=>{
//         res.json(Wines)
//     })
// ))

// app.post('/',(req,res)=>{
//     console.log("req.body:", req.body)
//     return (
//     db.MasterWineList.create({
//         name: req.body.name,
//         primaryFlavors: req.body.primaryFlavors.split(','),
//         region: req.body.region
//     }).then(Wines=>
//         res.json(Wines)
//     )
// )})

// app.delete('/:_id',(req,res)=>{
//     db.MasterWineList.findById(req.params._id)
//       .then(dbWine => dbWine.remove())
//       .then(dbWine => res.json(dbWine))
//       //if error, catch it and give a 422 response as well as logging the error in the console
//       .catch(err => res.status(422).json(err));
// })

app.use(routes)
// app.use(function (err, req, res, next) {
//     console.log('====== ERROR =======')
//     console.error(err.stack)
//     res.status(500)
// })

app.listen(PORT, function () {
  console.log('Listening on port %s.', PORT)
})
