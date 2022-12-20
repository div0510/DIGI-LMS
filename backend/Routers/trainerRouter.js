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
    trainerModel.findOne({email: req.body.email, password: req.body.password})
    .then((result) => {
        console.log(result);
        if(result){
            res.status(200).json(result);
        } else {
            res.status(401).json(result);
        }
    }).catch((err) => {
        console.log(err);
        res.json(err);
    });
})



module.exports = router;
