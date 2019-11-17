const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

require('../models/Order');
const order = mongoose.model('order');

;

    router.get('/', (req, res) => {
        order.find().populate('orderitem.itemId', 'itemname , itemprice')
            .then(response => {
                res.status(200).send(response);
            }).catch(error => {
                console.log('Error in Retriving :' + JSON.stringify(error));
                res.status(404).send('Error in Retriving :' + JSON.stringify(error));
            });
    });


   

module.exports = router;