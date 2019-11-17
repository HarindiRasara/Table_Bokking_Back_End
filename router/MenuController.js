const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');

require('../models/Menu');
const Menue = mongoose.model('menu');

//get all item
router.get('/',(req,res) =>{
    Menue.find((err,docs) =>{
        if(!err){res.send(docs);}
        else{console.log('Error in Retriving :' +JSON.stringify(err,undefined,2));}
    });
});

//get one item by Id
router.get('/:id',(req,res)=>{
    Menue.findById(req.params.id,(err,doc)=>{
        if(!err){res.send(doc);}
        else{console.log('Error in Retriving :'+JSON.stringify(err,undefined,2));}
    });  
});

// add item
router.post('/', (req, res) => {
    const menu = new Menue({
        photoUrl:req.body.photoUrl,
        itemname:req.body.itemname,  
        itemprice:req.body.itemprice
    });
    menu.save((err,doc) =>{
      if(!err){res.send(doc);}
      else{console.log('Error in item save:' + JSON.stringify(err,undefined,2));}
    });
    });

//update item
router.put('/update',(req,res,next) =>{
    Menue.findById(req.body._id,(err,menu)=>{
        if(err)
        res.status(500).json({errmsg:err});
        menu.itemname=req.body.itemname;
        menu.itemprice=req.body.itemprice;
        menu.photoUrl=req.body.photoUrl;
        menu.save((err,menu)=>{
            if(err)
            res.status(500).json({errmsg:err});
            res.status(200).json({msg:menu});
        });
    })
    
    });

 

//delete item
router.delete('/:id',(req,res) =>{

    Menue.findByIdAndRemove(req.params.id, (err,doc)=>{
      if(!err){res.send(doc);}
      else{ console.log('Error in table Delete :' +JSON.stringify(err,undefined,2));}
    });
});



module.exports = router;