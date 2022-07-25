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

//ADMIN PLANT
// router.get('/adminplant', adminLoggedIn, (req, res) => {
//     if(req.user){
//         res.render('adminplant', { status: 'adminLoggedIn', user: req.user })
//     }else{
//         res.render('admin', { status: 'no', user: 'nothing' })
//     }
//     res.render('index')
// })

//ADMIN ANIMAL
router.get('/adminanimal', adminLoggedIn, (req, res) => {
    if(req.user){
        res.render('adminanimal', { status: 'adminLoggedIn', user: req.user })
    }else{
        res.render('admin', { status: 'no', user: 'nothing' })
    }
    res.render('index', { status: 'no', user: 'nothing' })
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
router.get('/addanimal', adminLoggedIn, (req, res) => {
    if(req.user){
        res.render('addanimal', { status: 'adminLoggedIn', user: req.user })
    }else{
        res.render('admin', { status: 'no', user: 'nothing' })
    }
    res.render('index', { status: 'no', user: 'nothing' })
})

// CRUD OPERATION
// SELECT PLANT
// ADMIN PLANT
router.get('/adminplant', adminLoggedIn, (req, res) => {
    if(req.user){
        let sql = 'SELECT * FROM users'
    let query = db.query(sql, (err, results) => {
        if(err) throw err
        res.render('adminplant', { status: 'adminLoggedIn', user: req.user })
        console.log(user)
    })
    }else{
        res.render('index', { status: 'no', user: 'nothing' })
    }
    res.render('plantAdmin', { status: 'no', user: 'nothing' })
})

// SELECT PLANT
// router.get('/adminplant', (req, res) => {
//     let sql = 'SELECT * FROM users'
//     let query = db.query(sql, (err, results) => {
//         if(err) throw err
//         if(req.user){
//         res.render('plantadmin', { status: 'adminLoggedIn', user: req.user, results:results})
//         }else{
//         res.render('admin', { status: 'no', user: 'nothing' })
//         }
//         res.render('index', { status: 'no', user: 'nothing'})
//     })
// })


router.get('plant', (req, res) => {
    //Select users

})

module.exports = router