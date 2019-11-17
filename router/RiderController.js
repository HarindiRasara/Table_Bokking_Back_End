const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');


require('../models/Riders');
const Riders = mongoose.model('User');

    router.get('/',(req,res) =>{
        Riders.find((err,docs) =>{
            if(!err){res.send(docs);}
            else{console.log('Error in Retriving :' +JSON.stringify(err,undefined,2));}
        });
    });



module.exports = router;