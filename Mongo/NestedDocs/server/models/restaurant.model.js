const mongoose = require('mongoose');
const { ReviewSchema } = require('./review.model');

const RestaurantSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "Restaurant name is required."],
        minlength: [2, "Restaurant name must be at least 2 characters."],
        maxlength: [100, "Damn bro, server space isn't free!"]
    },
    address: {
        type: String,
        required: [true, "Address is required."]
    },
    reviews: [ReviewSchema]
}, { timestamps: true });

module.exports.Restaurant = mongoose.model("Restaurant", RestaurantSchema);