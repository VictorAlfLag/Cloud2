const { Model } = require('objection');

class Product extends Model {
    static get tableName() {
        return 'product';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['nombre', 'descripcion', 'precio', 'stock',],

            properties: {
                id: { type: 'integer' },
                nombre: { type: 'string', minLength: 1 },
                descripcion: { type: 'string', minLength: 1 },
                precio: { type: 'number' },
                stock: { type: 'integer' },,
                imagen_url: { type: 'string' },
                creado_en: { type: 'string', format: 'date-time' },
                actualizado_en: { type: 'string', format: 'date-time' },
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

