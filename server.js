const express = require('express')
const app = express()
const path = require('path')
const db = require('./routes/db-config')
const cookie = require('cookie-parser')
const bodyParser = require('body-parser')
const PORT = process.env.PORT || 4000
app.use('/js', express.static(__dirname + '/public/js'))
app.use('/css', express.static(__dirname + '/public/css'))
app.set('view engine', 'ejs')
app.set('views', './views')
app.use(cookie())
app.use(express.json())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))
db.connect((err) => {
    if (err) throw err
    console.log('Connected to database')
})

const pagesAdmin = require('./routes/pagesAdmin')
const pages = require('./routes/pages')

app.use('/', pages);
app.use('/admin', pagesAdmin);

app.use('/api', require('./controllers/auth'))

const methodOverride = require('method-override')

app.use(methodOverride('_method'))
app.use(express.urlencoded({extended : false}))

app.use(express.static(path.join(__dirname, 'assets')))

app.listen(PORT, () => {console.log(`App running on port ${PORT}`)})