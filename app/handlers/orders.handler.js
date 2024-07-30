const Order = require('../models/Order');

const listOrders = async (req, res) => {
    try {
        const orders = await Order.query();
        res.json(orders); // Retorna la respuesta JSON con todas las órdenes
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createOrder = async (req, res) => {
    try {
        const { order_date, customer_id, total_amount, status, shipping_address, payment_method, tracking_number } = req.body; // Desestructuración de datos
        const order = await Order.query().insert({
            order_date,
            customer_id,
            total_amount,
            status,
            shipping_address,
            payment_method,
            tracking_number
        });
        res.status(201).json(order); // Retorna la orden creada
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateOrder = async (req, res) => {
    try {
        const orderId = req.params.id;
        const updatedOrder = await Order.query().patchAndFetchById(orderId, req.body);
        if (!updatedOrder) {
            return res.status(404).json({ error: 'Order not found' });
        }
        res.json(updatedOrder); // Retorna la orden actualizada
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteOrder = async (req, res) => {
    try {
        const orderId = req.params.id;
        const deletedOrder = await Order.query().deleteById(orderId);
        if (deletedOrder === 0) { // Verifica si se eliminó alguna fila
            return res.status(404).json({ error: 'Order not found' });
        }
        res.status(204).send(); // Retorna un 204 No Content
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    listOrders,
    createOrder,
    updateOrder,
    deleteOrder,
};
