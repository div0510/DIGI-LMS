const express = require('express');
const router = express.Router();
const courseModel = require('../Model/coursesModel');


router.post('/add',(req,res)=>{
    console.log(req.body);
})


module.exports = router;