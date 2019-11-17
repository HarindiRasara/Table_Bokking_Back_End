const mongoose = require('mongoose');

const  OrderSchema = new mongoose.Schema({
    _id: mongoose.Schema.Types.ObjectId,
    menu: { type: mongoose.Schema.Types.ObjectId, ref: 'menu', required: true },
    customer:{type: mongoose.Schema.Types.ObjectId, ref: 'customers', required: true },
    quantity: { type: Number, default: 1 },
    address:{ type:String,required:true}
});

mongoose.model('order', OrderSchema);