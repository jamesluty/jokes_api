const mongoose = require("mongoose");

const jokes_schema = new mongoose.Schema({
    setup: {type: String, required: [true, "Joke is required"], minlength: [10, "Joke must be at least 10 characters long"]},
    punchline: {type: String, required: [true, "Punchline is requires"], minlength: [3, "Punchline must be at least 3 characters long"]}
}, {timestamps: true});

const Jokes = mongoose.model("Jokes", jokes_schema);

module.exports = Jokes;