const mongoose = require('mongoose');

const tripSchema = new mongoose.Schema({
    code: {
        type: String,
        required: [true, 'Trip code is required'],
        trim: true
    },
    name: {
        type: String,
        required: [true, 'Trip name is required'],
        trim: true
    },
    length: {
        type: String,
        required: [true, 'Trip length is required']
    },
    start: {
        type: String,
        required: [true, 'Trip start date is required']
    },
    resort: {
        type: String,
        required: [true, 'Resort is required']
    },
    perPerson: {
        type: String,
        required: [true, 'Price is required']
    },
    image: {
        type: String,
        required: [true, 'Image path is required']
    },
    description: {
        type: String,
        required: [true, 'Description is required']
    }
});

mongoose.model('Trip', tripSchema);