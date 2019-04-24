const express   = require('express');
const router    = express.Router();
const Users     = require('../models/users');


router.get('/:id' , async(req,res) =>{
    try{
        const foundUser = await Users.findById(req.params.id);
        res.render('users/index.ejs',{
            user : foundUser
        });
    }catch(err){
        console.log('error happening')
        res.send(err);
    }
})


module.exports = router;