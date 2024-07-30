/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('customer', table => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('email').notNullable().unique();
      table.string('phone').notNullable(); // Campo adicional
      table.string('address').notNullable(); // Campo adicional
      table.string('city').notNullable(); // Campo adicional
      table.string('state').notNullable(); // Campo adicional
      table.string('zip_code').notNullable(); // Campo adicional
      table.timestamps(true, true);
      table.dateTime('created_at').defaultTo(knex.fn.now()).notNullable(); // Campo adicional
  });
};

/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/
exports.down = function(knex) {
  return knex.schema.dropTable('customer');
};
