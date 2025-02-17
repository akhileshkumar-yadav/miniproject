const express = require('express')
const router = express.Router();
const Model = require('../models/contact');

router.post('/add',(req,res) =>{
    console.log(req.body)
    // storing data to mongodb
    // to add the data in database
    new Model(req.body).save()
    .then((result) => {
        res.json(result)
        
    }).catch((err) => {
        console.log(err);
        res.status(500).json({error:'Internal server Error'});
    });
    
})
// router.get('/getall',(req,res) => {
//     // empty brackets means get all data
//     Model.find(req.params.id)
//     .then((result) => {
//        res.json(result) 
//     })
//     .catch((err) => {
//         console.log(err);
//         res.status(500).json({error:'Internal server Error'});
//     });
// })

// get id
router.get('/getbyid/:id',(req,res) => {
    Model.findById(req.params.id)
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err);
        res.status(500).json({error:'internal server error'})
        
    });
})
// get email
router.get('/getbyemail/:email',(req,res) => {
    Model.find({email:req.params.email})
    .then((result) => {
        res.json(result)
    }).catch((err) => {
        console.log(err);
        res.status(500).json({error:'internal server error'})
        
    });
})

// delete by id

router.delete('/delete/:id', (req,res) => {
    Model.findByIdAndDelete(req.params.id)
    // then c asyncronouse function hai
    .then((result) => {
        res.json(result)
    }).catch((err) => {
       console.log(err)
       res.status(500).json({ error: 'Internal Server Error'})
        
    });
})

router.put('/update/:id',(req,res) =>{
    // new true is used to get the update
    // req.params.id to change date by id 
    // req.body jonaya data diya jaye use use kare
    Model.findByIdAndUpdate(req.params.id,req.body,{new:true})
    .then((result) => {
        res.status(200).json(result)
    }).catch((err) => {
        console.log(err)
        res.status(500).json({error:'Internal Server Error'})
        
    });
})

module.exports = router;