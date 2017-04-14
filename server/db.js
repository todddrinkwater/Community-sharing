var env = process.env['NODE_ENV'] || 'development'
var config = require('../knexfile.js')[env]
var knex = require('knex')(config)

module.exports = {
  getItems,
  getItem
}

function getItems () {
  return knex('items').select()
}

function getItem (id) {
  return knex('items').where('item_id', id)
}
