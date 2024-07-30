/**
 * @param { import("knex"). Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
  return knex.schema.createTable('reviews', table => {
      table.increments('id').primary();
      table.integer('rating').notNullable(); // Calificación de la reseña
      table.string('comment').notNullable(); // Comentario de la reseña
      table.integer('user_id').notNullable(); // ID del usuario que realizó la reseña
      table.integer('product_id').notNullable(); // ID del producto relacionado
      table.integer('created_by').notNullable(); // ID del creador de la reseña
      table.integer('updated_by').notNullable(); // ID del último actualizador de la reseña
      table.string('status').notNullable(); // Estado de la reseña
      table.text('response'); // Respuesta del administrador a la reseña
      table.timestamps(true, true); // Campos para created_at y updated_at
  });
};

/**
* @param { import("knex"). Knex } knex
* @returns { Promise<void> }
*/
exports.down = function(knex) {
  return knex.schema.dropTable('reviews');
};
