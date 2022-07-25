const express = require('express')
const adminLoggedIn = require('../controllers/loggedIn')
const logout = require('../controllers/logout')
const router = express.Router()

//ADMIN HOME

router.get('/', adminLoggedIn, (req, res) => {
    if(req.user){
        res.render('admin', { status: 'adminLoggedIn', user: req.user })
    }else{
        res.render('admin', { status: 'no', user: 'nothing' })
    }
    res.render('index')
})

router.get('/logout', logout)

//ADMIN PLANT
router.get('/adminplant', adminLoggedIn, (req, res) => {
    if(req.user){
        res.render('adminplant', { status: 'adminLoggedIn', user: req.user })
    }else{
        res.render('admin', { status: 'no', user: 'nothing' })
    }
    res.render('index')
})

//ADMIN ANIMAL
router.get('/adminanimal', adminLoggedIn, (req, res) => {
    if(req.user){
        res.render('adminanimal', { status: 'adminLoggedIn', user: req.user })
    }else{
        res.render('admin', { status: 'no', user: 'nothing' })
    }
    res.render('index')
})

//ADMIN ADD PLANT
router.get('/addplant', adminLoggedIn, (req, res) => {
    if(req.user){
        res.render('addplant', { status: 'adminLoggedIn', user: req.user })
    }else{
        res.render('admin', { status: 'no', user: 'nothing' })
    }
    res.render('index')
})

//ADMIN ADD ANIMAL
router.get('/addanimal', adminLoggedIn, (req, res) => {
    if(req.user){
        res.render('addanimal', { status: 'adminLoggedIn', user: req.user })
    }else{
        res.render('admin', { status: 'no', user: 'nothing' })
    }
    res.render('index')
})

module.exports = router