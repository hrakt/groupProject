const express   = require('express');
const router    = express.Router();
const Users     = require('../models/users');


router.get('/' , async(req,res) =>{
    try{
        // const foundUser = await Users.find({});
        res.render('users/index.ejs',{
            // users : foundUsers
        });
    }catch(err){
        console.log('error happening')
        res.send(err);
    }
})


module.exports = router;