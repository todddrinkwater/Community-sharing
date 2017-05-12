var express = require('express')
var router = express.Router()

var db = require('../db')

router.get('/:id', function (req, res) {
  var id = req.params.id
  db.getLoanedItems(id).then((result) => {
    res.json(result)
  })
  .catch((err) => {
    res.status(500).send(err)
  })
})

module.exports = router
