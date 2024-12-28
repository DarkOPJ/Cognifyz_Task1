const { reviews } = require('../models/reviews.models');

// GET all reviews
function getReviews(req, res) {
    res.json(reviews);
}

// POST review
function addReview(req, res) {
    const { name, description, rating } = req.body;
    if (!name || !description || !rating) {
        return res.status(400).json({ error: 'name, description and rating are required fields' });
    }
    const newReview = {
        name,
        description,
        rating
    };
    reviews.push(newReview);
    res.redirect('/');
}

module.exports = {
    getReviews,
    addReview
};