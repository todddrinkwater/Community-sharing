var path = require('path')
var express = require('express')
var bodyParser = require('body-parser')
var cors = require('cors')

var server = express()

var items = require('./routes/items')

server.use(bodyParser.json())
server.use(express.static(path.join(__dirname, '../public')))
server.use(cors({origin: 'http://localhost:8080'}))

server.use('/items', items)

module.exports = server
