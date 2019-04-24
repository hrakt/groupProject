const express = require('express');
const router = express.Router();


router.get('/add' , async(req,res) =>{
    console.log('rediricting you to the add event page')
    try{

        res.render('events/add.ejs');
    }catch(err){
        res.send(err);
    }
});

module.exports = router;