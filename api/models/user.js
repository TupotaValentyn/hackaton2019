const mongoose = require("mongoose");

const user = mongoose.Schema({
    id: Number,
    name: String,
});

const User = mongoose.model("users", user);

module.exports = User;