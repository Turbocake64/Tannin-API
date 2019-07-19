const router = require('express').Router()
const signupLoginRoutes = require('./signupLogin')
const wineRoutes = require('./Wine')
const addwineRoutes = require('./Addwine')
const getwineRoutes = require('./Getwine')
const restaurantRoutes = require('./Restaurants')
const employeesRoutes = require('./Employees')
const addEmployeeRoutes = require('./AddEmployee')

router.use('/user', signupLoginRoutes)

router.use('/wines', wineRoutes)
router.use('/addwine', addwineRoutes)
router.use('/getwine', getwineRoutes)

router.use('/restaurants', restaurantRoutes)

router.use('/employees', employeesRoutes)
router.use('/addEmployee', addEmployeeRoutes)

module.exports = router
