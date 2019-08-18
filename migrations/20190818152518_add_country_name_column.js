
exports.up = function(knex) {
  return knex.schema.table('cities', function(table) {
      table.string('country_name');
  })
};

exports.down = function(knex) {
    return knex.schema.table('cities', function(table) {
        table.dropColumn('country_name');
    })
  
};
