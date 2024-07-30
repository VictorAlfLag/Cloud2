const { Model } = require('objection');

class Review extends Model {
    static get tableName() {
        return 'reviews';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['rating', 'comment', 'user_id', 'product_id', 'created_by', 'status'],
            properties: {
                id: { type: 'integer' },
                rating: { type: 'integer' },
                comment: { type: 'string', minLength: 1 },
                user_id: { type: 'integer' }, // ID del usuario que realizó la reseña
                product_id: { type: 'integer' }, // ID del producto relacionado
                created_by: { type: 'integer' }, // ID del creador de la reseña
                updated_by: { type: 'integer' }, // ID del último actualizador
                status: { type: 'string' }, // Estado de la reseña
                response: { type: 'string' }, // Respuesta del administrador a la reseña
                created_at: { type: 'string', format: 'date-time' },
                updated_at: { type: 'string', format: 'date-time' }
            }
        };
    }

    static async getReviews() {
        return await Review.query();
    }

    static async insert(data) {
        return await Review.query().insert(data);
    }

    static async update(data, id) {
        return await Review.query().patchAndFetchById(id, data);
    }

    static async delete(id) {
        return await Review.query().deleteById(id);
    }
}

module.exports = Review;
