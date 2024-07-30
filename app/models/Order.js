const { Model } = require('objection');

class Order extends Model {
    static get tableName() {
        return 'orders';
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['order_date', 'customer_id', 'total_amount', 'status', 'shipping_address', 'payment_method'], // Campos obligatorios

            properties: {
                id: { type: 'integer' },
                order_date: { type: 'string', format: 'date' },
                customer_id: { type: 'integer' }, // Campo adicional
                total_amount: { type: 'number' }, // Campo adicional
                status: { type: 'string' }, // Campo adicional
                shipping_address: { type: 'string' }, // Campo adicional
                payment_method: { type: 'string' }, // Campo adicional
                tracking_number: { type: 'string' }, // Campo adicional
                created_at: { type: 'string', format: 'date-time' }, // Campo adicional
                updated_at: { type: 'string', format: 'date-time' } // Campo adicional
            }
        };
    }

    static async getOrders() {
        return await Order.query();
    }

    static async insert(data) {
        return await Order.query().insert(data);
    }

    static async update(data, id) {
        return await Order.query().patchAndFetchById(id, data);
    }

    static async delete(id) {
        return await Order.query().deleteById(id);
    }
}

module.exports = Order;
