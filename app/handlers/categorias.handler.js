const Categorias = require('../models/Categorias');

const listCategorias = async (req, res) => {
    try {
        const categorias = await Categorias.getCategorias();
        res.json(categorias);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const insertCategorias = async (req, res) => {
    try {
        const categoria = await Categorias.insert(req.body);
        res.status(201).json(categoria);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateCategorias = async (req, res) => {
    try {
        const categoria = await Categorias.update(req.body, req.params.id);
        res.status(200).json(categoria);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteCategorias = async (req, res) => {
    try {
        await Categorias.delete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    listCategorias,
    insertCategorias,
    updateCategorias,
    deleteCategorias,
};
