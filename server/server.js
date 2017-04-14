var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')

var server = express()

var items = require('./routes/items')
var item = require('./routes/item')

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))
server.use(cors({origin: 'http://localhost:8080'}))

server.use('/items', items)
server.use('/item', item)

module.exports = server
