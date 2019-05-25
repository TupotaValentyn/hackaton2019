const mongoose = require("mongoose");

const event = mongoose.Schema({
    id: Number,
    creatorId: Number,
    name: String,
    hashtags: Array(String),
    description: String,
    locale: Object,
    creator: Object,
});

const Event = mongoose.model("questions", event);

module.exports = Event;