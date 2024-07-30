const Reviews = require('../models/Reviews');

const listReviews = async (req, res) => {
    try {
        const reviews = await Reviews.getReviews();
        res.json(reviews);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const insertReviews = async (req, res) => {
    try {
        const review = await Reviews.insert(req.body);
        res.status(201).json(review);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const updateReviews = async (req, res) => {
    try {
        const review = await Reviews.update(req.body, req.params.id);
        res.status(200).json(review);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

const deleteReviews = async (req, res) => {
    try {
        await Reviews.delete(req.params.id);
        res.status(204).send();
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

module.exports = {
    listReviews,
    insertReviews,
    updateReviews,
    deleteReviews,
};
