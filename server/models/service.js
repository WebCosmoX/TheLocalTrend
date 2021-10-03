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
},
    { timestamps: true }
);

module.exports = mongoose.model('service', ServiceSchema);