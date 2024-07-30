/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('categorias', table => {
      table.increments('id').primary();
      table.string('name').notNullable();
      table.string('description'); // Campo adicional para la descripción
      table.string('status').notNullable(); // Campo adicional para el estado
      table.integer('created_by').notNullable(); // Campo adicional para el ID del creador
      table.integer('updated_by').notNullable(); // Campo adicional para el ID del último actualizador
      table.timestamps(true, true); // Campos para created_at y updated_at
  });
};

/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/
exports.down = function(knex) {
  return knex.schema.dropTable('categorias');
};
