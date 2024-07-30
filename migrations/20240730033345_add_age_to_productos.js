/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.up = function(knex) {
    return knex.schema.table('productos', function (table) {
        table.string('new_column'); // Cambia 'new_column' por el nombre de la columna que desees agregar
    });
};

/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.down = function(knex) {
    return knex.schema.table('productos', function (table) {
        table.dropColumn('new_column'); // Cambia 'new_column' por el nombre de la columna que desees eliminar
    });
};
