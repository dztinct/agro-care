const express = require('express')
const router = express.Router()

const register = require('./register')
const login = require('./login')
const adminLogin = require('./adminLogin')
const addanimal = require('./addanimal')
const addplant = require('./addplant')
const updateanimal = require('./updateanimal')
const updateplant = require('./updateplant')

router.post('/register', register)
router.post('/login', login)
router.post('/adminLogin', adminLogin)
router.post('/addanimal', addanimal)
router.post('/addplant', addplant)
router.put('/updateanimal', updateanimal)
router.put('/updateplant', updateplant)

module.exports = router