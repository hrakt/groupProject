const express   = require('express');
const router    = express.Router();
const Events    = require('../models/events');
const Users     = require('../models/users');


router.get('/add' , async(req,res) =>{
    try{
        const foundEvents = await Events.find({});
        res.render('events/add.ejs', {
            events: foundEvents,
            logged: req.session.logged
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
        const foundEvents = await Events.find({});
        const foundUser = await Users.findById(req.session.usersDbId);


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
    try{
        const foundEvents = await Events.findById(req.params.id);
        res.render('events/show.ejs', {
            events: foundEvents
        })
    }catch(err){
        res.send(err);
    }
})

router.get('/:id/edit', async (req, res)=>{
    try {
    const foundEvents = await Events.findById(req.params.id);
    res.render('events/edit.ejs', {
      events: foundEvents
    })
    res.redirect('events/add')
    } catch (err) {
      res.send(err)
    }
  });

router.put('/:id', async (req, res) => {
    try{
    const updatedEvent = await Events.findByIdAndUpdate(req.params.id, req.body, {new: true});
    console.log(updatedEvent + 'udpated event PUT')
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