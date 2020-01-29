const mongoose = require("mongoose");
var jwt = require('jsonwebtoken');
const config = require("config");


const userSchema = new mongoose.Schema({
    email: {
        type: String,
        required: true,
        minlength: 3
    },
    password: {
        type: String,
        required: true,
        minlength: 3
    },
    name: {
        type: String,
        required: true,
        minlength: 3
    },
    isAdmin: {
        type: Boolean,
        default: true
    }
})
const User = mongoose.model("User", userSchema);
const generateToken = async (user) => {
    return await jwt.sign(user, config.get("jwtPrivateKey"))
}
exports.User = User
exports.generateToken = generateToken