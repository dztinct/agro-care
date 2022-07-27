const express = require('express')
const loggedIn = require('../controllers/loggedIn')
const logout = require('../controllers/logout')
const router = express.Router()
const db = require('../routes/db-config')

router.get('/', loggedIn, (req, res) => {
    if(req.user){
        res.render('index', { status: 'loggedIn', user: req.user })
    }else{
        res.render('index', { status: 'no', user: 'nothing' })
    }
    res.render('index', { status: 'no', user: 'nothing' })
})

    router.get('/animal', loggedIn, (req, res) => {
        if(req.user){
        let sql = 'SELECT * FROM animals'
        db.query(sql, (err, rows) => {
            if(err) throw err
            console.log(rows)
            res.render('animal', { 
                status: 'loggedIn', 
                result: rows 
            })
    })
        }else{
            res.render('index', { status: 'no', animals: [] })
        }
})

    router.get('/plant', loggedIn, (req, res) => {
        if(req.user){
        let sql = 'SELECT * FROM plant'
        db.query(sql, (err, rows) => {
            if(err) throw err
            console.log(rows)
            res.render('plant', { 
                status: 'loggedIn', 
                result: rows 
            })
    })
        }else{
            res.render('index', { status: 'no', animals: [] })
        }
})

router.get('/register', (req, res) => {
    res.sendFile('register.html', {root: './public'})
})

router.get('/about', (req, res) => {
    res.sendFile('about.html', {root: './public'})
})

router.get('/login', (req, res) => {
    res.sendFile('login.html', {root: './public/'})
})

router.get('/logout', logout)

module.exports = router