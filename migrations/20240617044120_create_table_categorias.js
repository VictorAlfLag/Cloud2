/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('categorias', function(table) {
      table.increments('id').primary();
      table.string('nombre').notNullable();
      table.string('descripcion');
      table.string('imagen_url'); // Campo para la URL de la imagen
      table.timestamp('creado_en').defaultTo(knex.fn.now()).notNullable();
      table.timestamp('actualizado_en').defaultTo(knex.fn.now()).notNullable();
  });
};

/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/
exports.down = function(knex) {
  return knex.schema.dropTable('categorias');
};
