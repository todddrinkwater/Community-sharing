var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {

  db.getItems().then((result) => {
    res.send('all')
  })
  .catch((err) => {
    res.status(500).send(err)
  })
})

module.exports = router