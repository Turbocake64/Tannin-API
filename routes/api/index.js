const path = require('path')
const router = require('express').Router()
const wineRoutes = require('./Wine')
const restaurantRoutes = require('./Restaurants')
const employeesRoutes = require('./Employees')
const signupLoginRoutes = require('./signupLogin')
const addEmployeeRoutes = require('./AddEmployee')

// naming the routes; using the books.js and google.js routes file

// the API.js will hit these routes once activitated by client/ user
// router.use("/google", googleRoutes);
// router.use("/books", bookRoutes);
router.use('/user', signupLoginRoutes)
const addwineRoutes = require('./Addwine')
const getwineRoutes = require('./Getwine')

router.use('/employees', employeesRoutes)
router.use('/restaurant', restaurantRoutes)
router.use('/wine', wineRoutes)

router.use('/addwine', addwineRoutes)
router.use('/addEmployee', addEmployeeRoutes)
router.use('/getwine', getwineRoutes)

module.exports = router
