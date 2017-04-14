var env = process.env['NODE_ENV'] || 'development'
var config = require('../knexfile.js')[env]
var knex = require('knex')(config)

module.exports = {
  getItems,
  getItem,
  getUser,
  getLoanItems,
  getLoanedItems
}

function getItems () {
  return knex('items').select()
}

function getItem (id) {
  return knex('items').where('item_id', id)
  .join('users', 'owner_id', 'user_id')
}

function getUser (id) {
  return knex('users').where('user_id', id)

}

function getLoanItems (id) {
  return knex('items').where('owner_id', id)
}

function getLoanedItems (id) {
  return knex('items').where('owner_id', id)
  .join('loans', 'owner_id' , 'lenders_id')
  .join('users', 'borrowers_id', 'user_id')
}
