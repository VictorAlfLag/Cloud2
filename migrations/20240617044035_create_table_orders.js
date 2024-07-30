/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('orders', table => {
      table.increments('id').primary();
      table.date('order_date').notNullable();
      table.integer('customer_id').notNullable(); // Campo adicional para ID del cliente
      table.decimal('total_amount', 10, 2).notNullable(); // Campo adicional para el monto total
      table.string('status').notNullable(); // Campo adicional para el estado del pedido
      table.string('shipping_address').notNullable(); // Campo adicional para la dirección de envío
      table.string('payment_method').notNullable(); // Campo adicional para el método de pago
      table.string('tracking_number'); // Campo adicional para el número de seguimiento
      table.timestamps(true, true);
  });
};

/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/
exports.down = function(knex) {
  return knex.schema.dropTable('orders');
};
