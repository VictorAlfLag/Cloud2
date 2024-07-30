/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('orders', function(table) {
      table.increments('id').primary();
      table.date('fecha_orden').notNullable();
      table.string('estado').notNullable();
      table.decimal('total', 10, 2).notNullable();
      table.string('metodo_pago').notNullable();
      table.timestamp('creado_en').defaultTo(knex.fn.now()).notNullable();
      table.timestamp('actualizado_en').defaultTo(knex.fn.now()).notNullable();
  });
};

/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/
exports.down = function(knex) {
  return knex.schema.dropTable('orders');
};
