const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    username: {
        type: String,
        required: [true, 'Please tell us your name'],
      },
      email: {
        type: String,
        required: [true, 'Please tell us your email'],
        unique: true,
        lowercase: true,

      },
      role: {
        type: String,
        enum: ['user', 'admin'],
        default: 'user',
      },
      password: {
        type: String,
        required: [true, 'Please provide a password'],
        minlength: 8,
        select: false,
      },
      amtDonated:{
        type:Number,
        default:0
      }
});

const User = mongoose.model("User", userSchema);

module.exports = User;