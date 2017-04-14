var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')

var server = express()

var items = require('./routes/items')
var item = require('./routes/item')
var user = require('./routes/user')
var loanItems = require('./routes/loanItems')

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))
server.use(cors({origin: 'http://localhost:8080'}))

server.use('/items', items)
server.use('/item', item)
server.use('/user', user)
server.use('/loanItems', loanItems)

module.exports = server
