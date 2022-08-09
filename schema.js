const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
    title: String,
    description: String,
    status: Boolean
});

module.exports = bookSchema;