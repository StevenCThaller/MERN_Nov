const { Restaurant } = require('../models/restaurant.model');

module.exports = {
    // C
    newRestaurant: (req,res) => {
        Restaurant.create(req.body)
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    // R
    allRestaurants: (req,res) => {
        Restaurant.find()
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    // U
    newReview: (req,res) => {
        Restaurant.updateOne({ _id: req.params.id }, { $addToSet: { reviews: req.body }}, { runValidators: true })
            .then(data => res.json(data))
            .catch(err => res.json(err));
    },
    deleteReview: (req,res) => {
        Restaurant.updateOne({ 'reviews._id': req.params.revId }, { $pull: { reviews: { _id: req.params.revId }}})
            .then(data => res.json(data))
            .catch(err => res.json(err));
    }
    // D
}