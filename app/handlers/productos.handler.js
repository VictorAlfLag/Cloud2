const Product = require('../models/Product');

const listProduct = async (req, res) => {
    try {
        const products = await Product.getProducts();
        res.json(products);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const insertProduct = async (req, res) => {
    try {
        const product = await Product.insert(req.body);
        res.status(201).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateProduct = async (req, res) => {
    try {
        const product = await Product.update(req.body, req.params.id);
        res.status(200).json(product);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteProduct = async (req, res) => {
    try {
        await Product.delete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    listProduct,
    insertProduct,
    updateProduct,
    deleteProduct,
};
