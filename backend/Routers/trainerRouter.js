const express = require('express');
const router = express.Router();
const trainerModel = require('../Model/trainerModel');


router.post('/register',(req,res)=>{
    console.log(req.body);
    req.body.passwordCopy = req.body.password;
    req.body.createdAt = Date.now();
    console.log(req.body);
    new trainerModel(req.body).save()
    .then((result) => {
        console.log(result);
        console.log(result.status);
        console.log(result.code);
        // res.json(result);
    }).then((result)=>{console.log(result);}).catch((err) => {
        console.log(err);
        res.json(err);
    });
})

router.post('/login',(req,res)=>{
    console.log(req.body);
    trainerModel.findOne()
    .then((result) => {
        console.log(result);
        res.json(result);
    }).catch((err) => {
        console.log(err);
        res.json(err);
    });
})



module.exports = router;