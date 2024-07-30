/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('reviews', function(table) {
      table.increments('id').primary();
      table.integer('rating').notNullable();
      table.string('comentario').notNullable();
      table.string('foto_url'); // Campo para la URL de la foto
      table.timestamp('creado_en').defaultTo(knex.fn.now()).notNullable();
      table.timestamp('actualizado_en').defaultTo(knex.fn.now()).notNullable();
  });
};

/**
* @param { import("knex").Knex } knex
* @returns { Promise<void> }
*/
exports.down = function(knex) {
  return knex.schema.dropTable('reviews');
};
