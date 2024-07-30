/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.createTable('categorias', table => {
        table.increments('id').primary();
        table.string('name').notNullable(); // Nombre de la categoría
        table.string('description'); // Descripción de la categoría
        table.string('status').notNullable(); // Estado de la categoría
        table.integer('created_by').notNullable(); // ID del creador
        table.integer('updated_by').notNullable(); // ID del último actualizador
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
