const mongoose = require("mongoose");

const event = mongoose.Schema({
    id: Number,
    creatorId: Number,
    name: String,
    hashtags: Array(String),
    description: String,
    locale: Object,
    type: String,
    creator: Object,
    image: String,
});

const Event = mongoose.model("events", event);

module.exports = Event;