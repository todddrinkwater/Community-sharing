
var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')

var server = express()
var db = require('./db')
server.set('knex', db.knex)

<<<<<<< HEAD
var items = require('./routes/items')
var user = require('./routes/user')

var userById = require('./routes/userById')
var loanItems = require('./routes/loanItems')
var loanedItems = require('./routes/loanedItems')
var borrowedItems = require('./routes/borrowedItems')
var loanRequest = require('./routes/loanRequest')
var search = require('./routes/search')

=======
>>>>>>> ce9db23c1be0edf37e526bd4882b00839087b80c
server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))
<<<<<<< HEAD
server.use(cors({origin: '*'}))

server.use('/items', items)

server.use('/user', user)
server.use('/userById', userById)

server.use('/loanItems', loanItems)
server.use('/loanedItems', loanedItems)
server.use('/borrowedItems', borrowedItems)
server.use('/loanRequest', loanRequest)

server.use('/search', search)
=======
>>>>>>> ce9db23c1be0edf37e526bd4882b00839087b80c

module.exports = server
