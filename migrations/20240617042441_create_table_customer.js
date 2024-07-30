/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('customer', function(table) {
      table.increments('id').primary();
      table.string('nombre').notNullable();
      table.string('correo_electronico').notNullable();
      table.string('telefono').notNullable();
      table.string('direccion').notNullable();
      table.string('ciudad').notNullable();
      table.string('provincia').notNullable();
      table.string('codigo_postal').notNullable();
      table.timestamp('creado_en').defaultTo(knex.fn.now()).notNullable();
      table.timestamp('actualizado_en').defaultTo(knex.fn.now()).notNullable();
  });
};

/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/
exports.down = function(knex) {
  return knex.schema.dropTable('customer');
};

