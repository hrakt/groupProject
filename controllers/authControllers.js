const express   = require('express');
const router    = express.Router();
const bcrypt    = require('bcryptjs');
const User      = require('../models/users');



router.get('/login',(req, res) => {


        res.render('login.ejs', {
            logged: req.session.logged
        })

})

router.get('/register', (req, res) => {
    res.render('register.ejs',{user:req.session.usersDbId});
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
        res.locals.user = createdUser
        req.session.usersDbId = createdUser._id
        // res.send('you registered');
        res.redirect(`/users/${createdUser._id}`)

    } catch(err){
        res.send(err)
    }
});

router.post('/login', async(req,res)=>{
    try{
        const foundUser = await User.findOne({"email": req.body.email});
        if(foundUser){
            if(foundUser.email == "admin@admin.com" && bcrypt.compareSync(req.body.password, foundUser.password)){
                req.session.logged = true;
                req.session.usersDbId       = foundUser._id;
                console.log('im hitting here')
                res.redirect('/events/add',
                )

            }else{
                if(bcrypt.compareSync(req.body.password, foundUser.password) === true){
                    req.session.logged          = true;
                    req.session.usersDbId       = foundUser._id;
                    res.locals.user             = foundUser
    
                    console.log(foundUser, "=========");
                    res.redirect(`/users/${foundUser._id}`);
                }
                else{
                    console.log('not a user2, make sure you enter correct login info');
                    res.redirect('/auth/login');
                }
            }
        }else{
            console.log('not a user1, make sure you enter correct login info');
            res.redirect('/auth/login');
        }
    }catch(err){
        res.send(err);
    }
})

router.get('/logout', (req, res) => {
    req.session.destroy((err) => {
        if(err){
            res.send(err);
        } else {
            res.redirect('/auth/login')
        }
    })
})

module.exports = router;