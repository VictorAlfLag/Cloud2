/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('categorias', function (table) {
        table.integer('age'); // Agregar la columna 'age' a la tabla 'categorias'
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('categorias', function (table) {
        table.dropColumn('age'); // Eliminar la columna 'age' de la tabla 'categorias'
    });
};
