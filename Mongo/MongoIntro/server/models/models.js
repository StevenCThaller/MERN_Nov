// import mongoose
const mongoose = require('mongoose');

// define our mongoose schema - this just the rules
const ElectionStressSchema = new mongoose.Schema({
    news_channel: {
        type: String,
        required: [true, "You must enter something for this value."],
        maxlength: [5, "That's too long."]
    },
    stress_food: {
        type: String,
        required: [true, "You must stress eat!"]
    },
    hours_watched: {
        type: Number,
        required: [true, "If you're adding this entry, you clearly need to have hours watched, even if 0"],
        min: [0, "Must be at least 0"]
    },
    expletives_declared: [String]
}, { timestamps: true, collection: 'election_stress' })

// convert the schema to a mongoose model - this will allow us to make queries, as well as actually add it
// as a collection in our database
const ElectionStress = mongoose.model("Stress", ElectionStressSchema)

module.exports = {
    ElectionStress
}