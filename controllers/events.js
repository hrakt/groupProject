const express   = require('express');
const router    = express.Router();
const Events    = require('../models/events');
const Users     = require('../models/users');


function checkLogin(req,res,next){
    if(req.session.logged){
        next()
    }else{
        console.log("user not logged in, please login before contiuning")
        res.redirect("/auth/login");
    }
}



router.get('/add' , async(req,res) =>{
    try{
        const foundEvents   = await Events.find({});
        const foundUser     = await Users.findById(req.session.usersDbId);
        res.render('events/add.ejs', {
            events:     foundEvents,
            logged:     req.session.logged,
            user:       foundUser
        });
    }catch(err){
        res.send(err);
    }
});


// const createdEvent = await Events.create(req.body);
// console.log(createdEvent);
// res.render('events/add.ejs') 
//     events: createdEvent
//     console.log(`==================== ${events}`)
// res.redirect('/events/add')
let returnObjectArr = (arr1,arr2) =>{
    let arrOfObjects = [];
    for(let i=0;i<arr1.length();i++){
       arrOfObjects.push(arr1[i]._id);
        
    }
    return arrOfObjects;
}


router.get('/index', async(req,res)=>{
    try{
        const foundEvents   = await Events.find({});
        const foundUser     = await Users.findById(req.session.usersDbId);

        res.render('events/index.ejs',{
            events: foundEvents,
            user: foundUser,
            logged: req.session.logged}

    )
    }catch(err){
        res.send(err);
    }
})


router.get('/:id', async (req, res) => {
    console.log(req.session);
    try{
        const foundEvents       = await Events.findById(req.params.id).populate("users").exec();
        const foundUser         = await Users.findById(req.session.usersDbId);
        const usersAttending    = foundEvents.users;

        console.log(usersAttending, "<--- this is the users attending")
        
        res.render('events/show.ejs', {
            events: foundEvents,
            logged: req.session.logged,
            user: foundUser,
            attendees: usersAttending

        })
    }catch(err){
        res.send(err);
    }
})

router.get('/:id/edit', async (req, res)=>{
    try {
    const foundEvents   = await Events.findById(req.params.id);
    const foundUser     = await Users.findById(req.session.usersDbId);
    res.render('events/edit.ejs', {
        events: foundEvents,
        logged: req.session.logged,
        user: foundUser
    })
    // res.redirect('events/add')
    } catch (err) {
      res.send(err)
    }
  });

router.put('/:id', async (req, res) => {
    try{
    const updatedEvent = await Events.findByIdAndUpdate(req.params.id, req.body, {new: true});
    console.log(updatedEvent + 'updated event PUT')
    res.redirect('/events/add')
    } catch (err){
        res.send(err)
    }
})


router.post('/add', async(req,res)=>{
    try {
        const createdEvent = await Events.create(req.body);
        console.log(createdEvent);
        res.redirect('/events/add')
    } catch(err){
        res.send(err);
    }
    
});

router.delete('/:id', async (req, res) => {
    try {
        const deleteEvent      = await Events.findByIdAndRemove(req.params.id);
        console.log(deleteEvent._id,"<----- this is deleted events id")
        const findAllUsers     = await Users.find({'events': req.params.id})
        console.log(findAllUsers)
        findAllUsers.forEach(u => {
            u.events.remove(req.params.id)
            u.save()
        })
        // foundUser.events.remove(req.params.id);
        // foundUser.save();
        res.redirect('/events/add');
    } catch (err){
        res.send(err);
    }
})


module.exports = router;