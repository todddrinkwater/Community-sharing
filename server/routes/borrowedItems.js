var express = require('express')
var router = express.Router()

router.get('/:id', function (req, res) {
  var id = req.params.id
  req.app.get('db').getBorrowedItems(id).then((result) => {
    res.send(result)
  })
  .catch((err) => {
    res.status(500).send(err)
  })
})

module.exports = router
