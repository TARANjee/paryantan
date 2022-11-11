const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
    amount: {
        type: Number,
        default:0,
        min:[10,'Amount should be greator then Rs10'],
        required: [true, "A review should'n be empty"],
    },
    place: {
        type: String,
        required: [true, "A donation must have place"],
    },
    userName: {
        type: String,
        required: [true, "A donation must have a username"],
    },
    
});

const Donation = mongoose.model("Donation", donationSchema);

module.exports = Donation;