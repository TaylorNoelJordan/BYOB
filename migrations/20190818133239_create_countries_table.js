
exports.up = function(knex) {
  return Promise.all([
      knex.schema.createTable('countries', function(table) {
          table.increments('id').primary();
          table.string('name');
          table.integer('population');
          table.string('capital');

          table.timestamps(true, true);
      }),

      knex.schema.createTable('cities', function(table) {
          table.increments('id').primary();
          table.string('name');
          table.integer('population');
          table.integer('elevation');
          table.integer('country_id').unsigned()
          table.foreign('country_id').references('countries.id')

          table.timestamps(true, true)
      })
  ]);
};

exports.down = function(knex) {
    return Promise.all([
        knex.schema.dropTable('cities'),
        knex.schema.dropTable('countries')
    ]);
};
