const Category = require('../models/Category');

const listCategories = async (req, res) => {
    try {
        const categories = await Category.getCategories();
        res.json(categories); // Devuelve la respuesta en formato JSON
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const insertCategory = async (req, res) => {
    try {
        // Validar que los campos requeridos estén presentes en el cuerpo de la solicitud
        const { name, status, created_by } = req.body;
        if (!name || !status || !created_by) {
            return res.status(400).json({ error: 'Faltan campos requeridos: name, status, created_by' });
        }

        const category = await Category.insert(req.body);
        res.status(201).json(category); // Respuesta con el nuevo recurso creado
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateCategory = async (req, res) => {
    try {
        const categoryId = req.params.id;
        const category = await Category.update(req.body, categoryId);

        if (!category) {
            return res.status(404).json({ error: 'Categoría no encontrada' });
        }

        res.json(category); // Respuesta con los datos actualizados
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteCategory = async (req, res) => {
    try {
        const categoryId = req.params.id;
        const deletedCategory = await Category.delete(categoryId);

        if (!deletedCategory) {
            return res.status(404).json({ error: 'Categoría no encontrada' });
        }

        res.json({ message: 'Categoría eliminada con éxito' }); // Mensaje de éxito
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    listCategories,
    insertCategory,
    updateCategory,
    deleteCategory,
};
