const request = require('superagent')
const url = require('url')
const config = require('../config')

var listUrl = url.format(config)


const getListings = () => {
  request
    .get(listUrl + "/items/")
    .end(function (err, res) {
      if (err) {
        callback(err)
      } else {
        callback(null, res.body)
      }
    })
}

module.exports = getListings
