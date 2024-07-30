const Orders = require('../models/Orders');

const listOrders = async (req, res) => {
    try {
        const orders = await Orders.getOrders();
        res.json(orders);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const insertOrders = async (req, res) => {
    try {
        const order = await Orders.insert(req.body);
        res.status(201).json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateOrders = async (req, res) => {
    try {
        const order = await Orders.update(req.body, req.params.id);
        res.status(200).json(order);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteOrders = async (req, res) => {
    try {
        await Orders.delete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    listOrders,
    insertOrders,
    updateOrders,
    deleteOrders,
};
