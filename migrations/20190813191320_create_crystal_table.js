
exports.up = function(knex) {
   return knex.schema.createTable('crystal', (table) => {
        table.increments('id');
        table.varchar('type');
        table.integer('quantity');
        table.text('image');
      })
  
};

exports.down = function(knex) {
    return knex.schema.dropTableIfExists('crystal')
};
