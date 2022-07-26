const jwt = require('jsonwebtoken')
const db = require('../routes/db-config');
const bcrypt = require('bcryptjs')

const adminLogin = async (req, res) => {
    const { email, password } = req.body
    if (!email || !password) return res.json({ status: 'error', error: 'Please enter complete credentials'})
    else{
        db.query('SELECT * FROM users WHERE email = ?', [email], async (Err, result) => {
            if(Err) throw Err
            if(!result[0] || !await bcrypt.compare(password, result[0].password) || result[0].isAdmin != 1) return res.json({
                status: 'error',
                error: 'Incorrect email or password'
            })
            else{
                const token = jwt.sign({ id: result[0].id }, process.env.JWT_SECRET, {
                    expiresIn: process.env.JWT_EXPIRES,
                })
                const cookieOptions = {
                    expiresIn: new Date(Date.now() + process.env.COOKIE_EXPIRES * 24 * 60 * 60 * 1000),
                    httponly: true
                }
                res.cookie('userRegistered', token, cookieOptions)
                return res.json({ status: "success", success: 'Admin logged in successfully, click Home to continue'})
            }
        })
    }
}

module.exports = adminLogin