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
    var actualLength = response.length
    var expectedLength = 6

    // assert
    t.equal(response, expected)
    t.equal(actualLength, expectedLength)
    t.end()
  }
})
