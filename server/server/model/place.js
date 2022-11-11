const mongoose = require("mongoose");

const placeSchema = new mongoose.Schema({
    image:{
        type:String,
        required: [true, 'Please provide your image']
    },
    name:{
        type:String,
    },
    description:{
        type:String,
        trim: true,
    },
    city:{
        type:String,
        trim: true,
    },
    origin:{
        type:String,
        trim: true,
    },
    temp:{
        type:String,
        trim: true,
    },
    bestTime:{
        type:String,
        trim: true,
    },
    locatedIn:{
        type:String,
        trim: true,
    },
});

const Place = mongoose.model("Place", placeSchema);

module.exports = Review;