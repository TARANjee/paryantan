const mongoose = require("mongoose");

const reviewSchema = new mongoose.Schema({
    comment: {
        type: String,
        required: [true, "A review should'n be empty"],
    },
    status: {
        type: String,
        required: [true, "A tour must have a difficulty"],
        enum: {
            values: ["pending", "accepted", "denied"],
            message: "A review must be accepted , pending, or denied",
        },
        default: "pending",
    },
    userName: {
        type: String,
        required: [true, "A review must have a username"],
    },
});

const Review = mongoose.model("Review", reviewSchema);

module.exports = Review;