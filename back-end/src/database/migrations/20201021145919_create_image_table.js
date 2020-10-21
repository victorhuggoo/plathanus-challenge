
exports.up = knex => knex.schema.createTable('image', table => {
  table.increments('id'),
  table.string('file_name').notNullable(),
  table.string('crypto').notNullable(),
  table.string('url_img').notNullable(),
  table.timestamp('created_at').defaultTo(knex.fn.now())
});

exports.down = function(knex) {
  return knex.schema.dropTable('image')
};
