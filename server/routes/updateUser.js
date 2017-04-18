var express = require('express')
var router = express.Router()

var db = require('../db')

router.post('/', function (req, res) {
  var user = req.body
  console.log(user)
  db.updateUser(user).then(() => {
    res.sendStatus(201)
  })
  .catch((err) => {
    res.status(500).send(err)
  })
})

module.exports = router
