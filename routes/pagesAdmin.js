const express = require('express')
const adminLoggedIn = require('../controllers/adminLoggedIn')
const logout = require('../controllers/logout')
const router = express.Router()
const db = require('../routes/db-config')

//ADMIN HOME

router.get('/', adminLoggedIn, (req, res) => {
    if(req.user){
        res.render('admin', { status: 'adminLoggedIn', user: req.user })
    }else{
        res.render('admin', { status: 'no', user: 'nothing' })
    }
    res.render('index', { status: 'no', user: 'nothing' })
})

router.get('/logout', logout)

router.get('/adminanimal', adminLoggedIn, (req, res) => {
    if(req.user){
    let sql = 'SELECT * FROM animals'
    db.query(sql, (err, rows) => {
        if(err) throw err
        res.render('adminanimal', { 
            status: 'adminLoggedIn', 
            result: rows 
        })
})
    }else{
        res.render('admin', { status: 'no', animals: [] })
    }
})

router.get('/adminplant', adminLoggedIn, (req, res) => {
    if(req.user){
    let sql = 'SELECT * FROM plant'
    db.query(sql, (err, rows) => {
        if(err) throw err
        res.render('adminplant', { 
            status: 'adminLoggedIn', 
            result: rows 
        })
})
    }else{
        res.render('admin', { status: 'no', animals: [] })
    }
})

//ADMIN ADD PLANT
router.get('/addplant', adminLoggedIn, (req, res) => {
    if(req.user){
        res.render('addplant', { status: 'adminLoggedIn', user: req.user })
    }else{
        res.render('admin', { status: 'no', user: 'nothing' })
    }
    res.render('index', { status: 'no', user: 'nothing' })
})

//ADMIN ADD ANIMAL

// router.get('/register', (req, res) => {
//     res.sendFile('register.html', {root: './public'})
// })

//ADD ANIMAL
router.get('/addanimal', adminLoggedIn, (req, res) => {
    if(req.user){
        res.render('addanimal', { status: 'adminLoggedIn', user: req.user })
    }else{
        res.render('admin', { status: 'no', user: 'nothing' })
    }
    res.render('index', { status: 'no', user: 'nothing' })
})

//ANIMAL EDIT PAGE
router.get('/animal/edit/:animalId', adminLoggedIn, (req, res) => {
    const animalId = req.params.animalId;
    if(req.user){
    let sql = `SELECT * FROM animals where id = ${animalId}`
    db.query(sql, (err, rows) => {
        if(err) throw err
        res.render('updateanimal', { 
            status: 'adminLoggedIn', 
            result: rows[0]
        })
})
    }else{
        res.render('admin', { status: 'no', animals: [] })
    }
})

//PLANT EDIT PAGE
router.get('/plant/edit/:plantId', adminLoggedIn, (req, res) => {
    const plantId = req.params.plantId;
    if(req.user){
    let sql = `SELECT * FROM plant where id = ${plantId}`
    db.query(sql, (err, rows) => {
        if(err) throw err
        res.render('updateplant', { 
            status: 'adminLoggedIn', 
            result: rows[0]
        })
})
    }else{
        res.render('admin', { status: 'no', animals: [] })
    }
})

// ANIMAL DELETE PAGE
router.get('/animal/delete/:animalId', adminLoggedIn, (req, res) => {
    const animalId = req.params.animalId;
    if(req.user){
    let sql = `DELETE FROM animals where id = ${animalId}`
    db.query(sql, (err, rows) => {
        if(err) throw err
        res.redirect('/admin/adminanimal')
        
})
    }
})

// PLANT DELETE PAGE
router.get('/plant/delete/:plantId', adminLoggedIn, (req, res) => {
    const plantId = req.params.plantId;
    if(req.user){
    let sql = `DELETE FROM plant where id = ${plantId}`
    db.query(sql, (err, rows) => {
        if(err) throw err
        res.redirect('/admin/adminplant')
        
})
    }
})

module.exports = router