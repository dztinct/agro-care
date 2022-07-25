const express = require('express')
const router = express.Router()

const register = require('./register')
const login = require('./login')

const adminLogin = require('./adminLogin')

router.post('/register', register)
router.post('/login', login)

router.post('/adminLogin', adminLogin)

module.exports = router