const { Model } = require('objection');

class Categorias extends Model {
    static get tableName() {
        return 'categorias';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['nombre'],

            properties: {
                id: { type: 'integer' },
                nombre: { type: 'string', minLength: 1 },
                descripcion: { type: 'string' },
                imagen_url: { type: 'string' },
                creado_en: { type: 'string', format: 'date-time' },
                actualizado_en: { type: 'string', format: 'date-time' },
            }
        };
    }

    static async getCategorias() {
        return await Categorias.query();
    }

    static async insert(data) {
        return await Categorias.query().insert(data);
    }

    static async update(data, id) {
        return await Categorias.query().patchAndFetchById(id, data);
    }

    static async delete(id) {
        return await Categorias.query().deleteById(id);
    }
}

module.exports = Categorias;
