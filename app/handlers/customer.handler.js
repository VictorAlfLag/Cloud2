const Customer = require('../models/Customer');

const listCustomer = async (req, res) => {
    try {
        const customers = await Customer.getCustomers(); // Cambié 'customer' por 'customers'
        res.json(customers); // Retorna la lista de clientes
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const insertCustomer = async (req, res) => {
    try {
        const customer = await Customer.insert(req.body);
        res.status(201).json(customer);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateCustomer = async (req, res) => {
    try {
        const customer = await Customer.update(req.body, req.params.id);
        res.status(200).json(customer); // Cambié el código de estado a 200
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteCustomer = async (req, res) => {
    try {
        await Customer.delete(req.params.id);
        res.status(204).send(); // Retorna un 204 No Content después de eliminar
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    listCustomer,
    insertCustomer,
    updateCustomer,
    deleteCustomer,
};
