const { format } = require('mysql2');
const { Model } = require('objection');

class Product extends Model {
    static get tableName() {
        return 'productos';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name', 'price', 'description', 'category', 'stock', 'sku'], // Campos obligatorios

            properties: {
                id: { type: 'integer' },
                name: { type: 'string', minLength: 1 },
                price: { type: 'number' },
                description: { type: 'string', minLength: 1 }, // Campo adicional
                category: { type: 'string', minLength: 1 }, // Campo adicional
                stock: { type: 'integer' }, // Campo adicional
                sku: { type: 'string', minLength: 1 }, // Campo adicional
                image_url: { type: 'string' }, // Campo adicional
                created_at: { type: 'string', format: 'date-time' }, // Campo adicional
                updated_at: { type: 'string', format: 'date-time' } // Campo adicional
            }
        };
    }

    static async getProducts() {
        return await Product.query();
    }

    static async insert(data) {
        return await Product.query().insert(data);
    }

    static async update(data, id) {
        return await Product.query().patchAndFetchById(id, data);
    }

    static async delete(id) {
        return await Product.query().deleteById(id);
    }
}

module.exports = Product;
