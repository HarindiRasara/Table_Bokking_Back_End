const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

require('../models/ConformODetail');
const ConformODetail = mongoose.model('conformorder');


router.post('/', (req, res) => {
    const ConformO = new ConformODetail({
        name: req.body.name,
        address: req.body.address,
        telphoneno:req.body.telphoneno,
        ridername:req.body.ridername,
        riderid:req.body.riderid,
        totalcost:req.body.totalcost,
    });
    ConformO.save((err,doc) =>{
      if(!err){res.send(doc);}
      else{console.log('Error in item save:' + JSON.stringify(err,undefined,2));}
    });
    });

module.exports = router;