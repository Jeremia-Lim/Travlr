const mongoose = require('mongoose');

const tripsSchema = new mongoose.Schema({
    code: {
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    length: String,
    start: String,
    resort: String,
    perPerson: Number,
    image: String,
    description: String
});

// REGISTER the model (this is what your controller needs)
mongoose.model('trips', tripsSchema);