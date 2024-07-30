/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('productos', table => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.decimal('price', 10, 2).notNullable();
      table.text('description').notNullable(); // Campo adicional
      table.string('category').notNullable(); // Campo adicional
      table.integer('stock').notNullable(); // Campo adicional
      table.string('sku').notNullable().unique(); // Campo adicional
      table.string('image_url'); // Campo adicional
      table.dateTime('created_at').defaultTo(knex.fn.now()).notNullable(); // Campo adicional
      table.timestamps(true, true);
  });
};

/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/
exports.down = function(knex) {
  return knex.schema.dropTable('productos');
};
