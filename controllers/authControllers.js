const express   = require('express');
const router    = express.Router();
const bcrypt    = require('bcryptjs');
const User      = require('../models/users');

router.get('/login', (req, res) => {
    console.log('login in')
    res.render('login.ejs')
})

router.get('/register', (req, res) => {
    res.render('register.ejs')
})

router.post('/register', async(req,res)=>{
    const email     = req.body.email;
    const password  = req.body.password;
    const firstName = req.body.firstName;
    const lastName  = req.body.lastName;

    //its going to decrypt the password here
    const passwordHash = bcrypt.hashSync(password, bcrypt.genSaltSync(10));

    const userDbEntry       = {};
    userDbEntry.email       = req.body.email;
    userDbEntry.firstName   = req.body.firstName;
    userDbEntry.lastName    = req.body.lastName;
    userDbEntry.password    = passwordHash;
  
    try {
      const createdUser = await User.create(userDbEntry);
      console.log(createdUser);
  
      res.send('you registered');
  
    } catch(err){
      res.send(err)
    }
})

module.exports = router;