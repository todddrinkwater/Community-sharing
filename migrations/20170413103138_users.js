
exports.up = function (knex, Promise) {
  return knex.schema.createTable('users', function (table) {
    table.increments('user_id').primary()
    table.string('fname')
    table.string('lname')
    table.string('email')
    table.string('phone')
    table.binary('hash')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.dropTable('users')
}
