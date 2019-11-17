const mongoose = require('mongoose');

const  ConformOSchema = new mongoose.Schema({  
    name: { type: String, required: true },
    address: { type: String, required: true },
    telphoneno: { type: String, required: true },
    totalcost:{ type: Number, required: true },
    ridername:{ type: String, required: true },
    riderid: {
        type: String,
    },
});

mongoose.model('conformorder', ConformOSchema);