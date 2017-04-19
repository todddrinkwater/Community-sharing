var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/', function (req, res) {
  db.getItems().then((result) => {
    res.send(result)
  })
  .catch((err) => {
    res.status(500).send(err)
  })
})

router.get('/:id', function (req, res) {
  var id = req.params.id
  db.getItem(id).then((result) => {
    res.send(result)
  })
  .catch((err) => {
    res.status(500).send(err)
  })
})

router.post('/', function (req, res) {
  var item = req.body
  db.saveItem(item).then(() => {
    res.sendStatus(201)
  })
  .catch((err) => {
    res.status(500).send(err)
  })
})

router.put('/:id', function (req, res) {
  var id = req.params.id
  var item = req.body
  db.updateItem(id, item).then(() => {
    res.sendStatus(201)
  })
  .catch((err) => {
    res.status(500).send(err)
  })
})

router.delete('/:id', function (req, res) {
  var id = req.params.id
  db.deleteItem(id).then((result) => {
    res.sendStatus(result)
  })
  .catch((err) => {
    res.status(500).send(err)
  })
})

module.exports = router
