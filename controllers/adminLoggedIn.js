const db = require('../routes/db-config')
const jwt = require('jsonwebtoken')
const adminLoggedIn = (req, res, next) => {
    if(!req.cookies.userRegistered) return next()
    try {
        const decoded = jwt.verify(req.cookies.userRegistered, process.env.JWT_SECRET)
        db.query('SELECT * FROM users WHERE id = ?', [decoded.id], (err, result) => {
            if(err) return next()
            req.user = result[0]
            if(req.user.isAdmin == 1) return next();
        })
    } catch (error) {
        if(error) return next()
    }
}

module.exports = adminLoggedIn

