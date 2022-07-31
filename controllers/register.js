const db = require('../routes/db-config')
const bcrypt = require('bcryptjs')

const register = async (req, res) => {
    const { firstname, lastname, email, password: Npassword } = req.body
    if(!firstname || !lastname || !email || !Npassword) return res.json({status: 'error', error: "Please Enter complete credentials"})
    else{
        db.query('SELECT email FROM users WHERE email = ?', [email], async (err, result) => {
            if(err) throw err;
            if(result[0]) return res.json({status: 'error', error: 'Email has already been registered'})
            else{
                const password = await bcrypt.hash(Npassword, 8);
                db.query('INSERT INTO users SET ?', {firstname: firstname, lastname: lastname, email: email, password : password}, (error, results) => {
                    if(error) throw error;
                    return res.json({ status: 'success', success: 'User has been registered!, sign in to proceed'})
                })
            }
        })
    }
}

module.exports = register 