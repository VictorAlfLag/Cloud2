const { Model } = require('objection');

class Reviews extends Model {
    static get tableName() {
        return 'reviews';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['rating', 'comentario'],

            properties: {
                id: { type: 'integer' },
                rating: { type: 'integer' },
                comentario: { type: 'string', minLength: 1 },
                foto_url: { type: 'string' },
                creado_en: { type: 'string', format: 'date-time' },
                actualizado_en: { type: 'string', format: 'date-time' },
            }
        };
    }

    static async getReviews() {
        return await Reviews.query();
    }

    static async insert(data) {
        return await Reviews.query().insert(data);
    }

    static async update(data, id) {
        return await Reviews.query().patchAndFetchById(id, data);
    }

    static async delete(id) {
        return await Reviews.query().deleteById(id);
    }
}

module.exports = Reviews;
