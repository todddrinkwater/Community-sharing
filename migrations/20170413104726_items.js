
exports.up = function(knex, Promise) {
  return knex.schema.createTable('items', function (table) {
    table.increments('item_id').primary()
    table.string('category')
    table.string('item_name')
    table.string('description')
    table.boolean('available')
    table.string('image_url')
    table.integer('owner_id').references("users.user_id")
  })
};

exports.down = function(knex, Promise) {
  return knex.schema.dropTable('items')
};
