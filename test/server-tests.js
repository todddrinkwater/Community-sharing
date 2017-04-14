var supertest = require('supertest')
var cheerio = require('cheerio')
var test = require('tape')

var app = require('../server/server')

test('returning items', function (t) {
  supertest(app)
    .get('/items')
    .end(checkReturnedObject)

  function checkReturnedObject(err, res) {
    if (err) { throw err }

    var response = typeof(res.body)
    var expected = 'object'

    // assert
    t.equal(response, expected)
    t.end()
  }
})

test('returning item', function (t) {
  supertest(app)
    .get('/item/12003')
    .end(checkReturnedObject)

  function checkReturnedObject(err, res) {
    if (err) { throw err }

    var response = typeof(res.body)
    var expected = 'object'
    var actualID = res.body[0].item_id
    var expectedID = 12003

    // assert
    t.equal(response, expected)
    t.equal(actualID, expectedID)
    t.end()
  }
})
