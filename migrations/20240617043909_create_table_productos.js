/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('product', function(table) {
      table.increments('id').primary();
      table.string('nombre').notNullable();
      table.string('descripcion').notNullable();
      table.decimal('precio', 10, 2).notNullable();
      table.integer('stock').notNullable();
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
  return knex.schema.dropTable('product');
};
