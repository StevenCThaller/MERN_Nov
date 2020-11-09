const mongoose = require('mongoose');

const UserSchema = new mongoose.Schema({
    name: {
        type: String,
        required: [true, "A name must be entered."],
        minlength: [2, "Name must be at least 2 characters in length."]
    },
    age: { 
        type: Number,
        required: [true, "Age is required."],
        min: [13, "You must be at least 13 years of age to sign up."]
    }
}, { timestamps: true });

const User = mongoose.model("User", UserSchema);

module.exports = { User }