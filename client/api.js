const request = require('superagent')
const url = require('url')
const config = require('../config')

var urlPath = url.format(config)

const getListings = (callback) => {
  request
    .get(urlPath + "/items/")
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}

const getUsers = (callback, email) => {
  console.log(email);
  request
    .get(urlPath + "/users/" + email)
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}

module.exports = { getListings, getUsers }
