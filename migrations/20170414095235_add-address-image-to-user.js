
exports.up = function (knex, Promise) {
  return knex.schema.table('users', function (table) {
    table.string('address')
    table.string('suburb')
    table.string('town_city')
    table.string('postcode')
    table.string('user_image_url')
  })
}

exports.down = function (knex, Promise) {
  return knex.schema.table('users', function (table) {
    table.dropColumn('address')
    table.dropColumn('suburb')
    table.dropColumn('town_city')
    table.dropColumn('postcode')
    table.dropColumn('user_image_url')
  })
}
