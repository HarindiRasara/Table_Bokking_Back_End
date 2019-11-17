const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
    fullName:{
        type:String,
        required:'Full name can\'t be empty'
    },
    email:{
        type:String,
        required:'Email can\'t be empty',
        unique:true
    },
    password:{
        type:String,
        required:'Password can\'t be empty',
        minlength:[4,'Password must be at least 4 characters long!']
    },
    hotel:{
        type:String
    }
});


mongoose.model('User',userSchema);