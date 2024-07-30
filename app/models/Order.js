const { Model } = require('objection');

class Orders extends Model {
    static get tableName() {
        return 'orders';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['fecha_orden', 'estado', 'total', 'metodo_pago'],

            properties: {
                id: { type: 'integer' },
                fecha_orden: { type: 'string', format: 'date' },
                estado: { type: 'string', minLength: 1 },
                total: { type: 'number' },
                metodo_pago: { type: 'string', minLength: 1 },
                creado_en: { type: 'string', format: 'date-time' },
                actualizado_en: { type: 'string', format: 'date-time' },
            }
        };
    }

    static async getOrders() {
        return await Orders.query();
    }

    static async insert(data) {
        return await Orders.query().insert(data);
    }

    static async update(data, id) {
        return await Orders.query().patchAndFetchById(id, data);
    }

    static async delete(id) {
        return await Orders.query().deleteById(id);
    }
}

module.exports = Orders;
