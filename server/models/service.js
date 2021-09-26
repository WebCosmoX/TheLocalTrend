const mongoose = require('mongoose');

const ServiceSchema = mongoose.Schema({
    title: {
        type: String,
    },
    description: {
        type: String
    },
    image: {
        type: String
    }
});

module.exports = mongoose.model('service', ServiceSchema);