const Review = require('../models/Review');

const listReviews = async (req, res) => {
    try {
        const reviews = await Review.query();
        res.json(reviews); // Return JSON response
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const createReview = async (req, res) => {
    try {
        const { rating, comment, user_id, product_id, created_by, status } = req.body;

        // Validar los campos requeridos
        if (!rating || !comment || !user_id || !product_id || !created_by || !status) {
            return res.status(400).json({ error: 'Missing required fields' });
        }

        const review = await Review.query().insert(req.body);
        res.status(201).json(review);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const updateReview = async (req, res) => {
    try {
        const reviewId = req.params.id;
        const updatedData = req.body;

        const review = await Review.query().patchAndFetchById(reviewId, updatedData);
        if (!review) {
            return res.status(404).json({ error: 'Review not found' });
        }
        res.json(review);
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

const deleteReview = async (req, res) => {
    try {
        const reviewId = req.params.id;
        const deletedReview = await Review.query().deleteById(reviewId);
        if (!deletedReview) {
            return res.status(404).json({ error: 'Review not found' });
        }
        res.json({ message: 'Review deleted successfully' });
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

module.exports = {
    listReviews,
    createReview,
    updateReview,
    deleteReview,
};
