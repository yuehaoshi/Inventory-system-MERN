const mongoose = require('mongoose');
const Schema = mongoose.Schema;

let Shopping = new Schema({
    shopping_description: {
        type: String
    },
    shopping_responsible: {
        type: String
    },
    shopping_priority: {
        type: String
    },
    shopping_completed: {
        type: Boolean
    }
});

module.exports = mongoose.model('Shopping', Shopping);