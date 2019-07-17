const path = require('path')
const router = require('express').Router()
const apiRoutes = require('./api')

// modulizing the routes by requiring the api folder; which tells it to read inside the index.js
// accessing the folder api (books.js, google.js)
router.use('/api', apiRoutes)

// accessing the client folder (index.html)
// router.use((req, res) =>
//   res.sendFile(path.join(__dirname, "../client/build/index.html"))
// );

module.exports = router
