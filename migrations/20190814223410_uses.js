
exports.up = function(knex) {
    return knex.schema.createTable('uses', (table) => {
        table.increments('id');
        table.string('helps_with');
        table.string('color');
        table.integer('crystal_id').unsigned()
        table.foreign('crystal_id').references('crystal.id')
    })
  
};

exports.down = function(knex) {
  return knex.schema.dropTable('uses')
};
