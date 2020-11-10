const mongoose = require('mongoose');

const ReviewSchema = new mongoose.Schema({
    text: {
        type: String,
        required: [true, "A review without text is basically worthless."],
        minlength: [10, "You need to write at least 10 characters."]
    },
    rating: {
        type: Number,
        required: [true, "You must give a rating."],
        min: [0, "You cannot give less than 0 stars."],
        max: [5, "You cannot give more than 5 stars."]
    }
})

module.exports = {
    ReviewSchema
}