const router = require('express').Router()
const apiRoutes = require('./api')

// modularizing the routes by requiring the api folder; which tells it to read inside the index.js
// accessing the api route files for login/signup and for adding/getting/deleting wines, restaurants and employees
router.use('/api', apiRoutes)

// defining our actual root route or '/'
router.use(function(req, res) {
  res.json('Welcome to Tannin')
})

module.exports = router
