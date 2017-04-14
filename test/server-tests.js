var supertest = require('supertest')
var cheerio = require('cheerio')
var test = require('tape')

var app = require('../server/server')

test('return items', function (t) {
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

test('return item', function (t) {
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

test('return user', function (t) {
  supertest(app)
    .get('/user/7005')
    .end(checkReturnedObject)

  function checkReturnedObject(err, res) {
    if (err) { throw err }

    var response = typeof(res.body)
    var expected = 'object'
    var actualID = res.body[0].user_id
    var expectedID = 7005

    // assert
    t.equal(response, expected)
    t.equal(actualID, expectedID)
    t.end()
  }
})
