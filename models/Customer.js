 const mongoose = require('mongoose');

const CustomerSchema = new mongoose.Schema({
    name: { type: String, required: true },
    address: { type: String, required: true },
    email: { type: String, required: true },
    password: { type: String, required: true },
    
});

mongoose.model('customers', CustomerSchema);