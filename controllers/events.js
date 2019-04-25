const express   = require('express');
const router    = express.Router();
const Events    = require('../models/events');
const Users     = require('../models/users');


router.get('/add' , async(req,res) =>{
    try{
        const foundEvents = await Events.find({});
        res.render('events/add.ejs', {
            events: foundEvents
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
            user: foundUser}
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




router.post('/add', async(req,res)=>{
    try {
    const createdEvent = await Events.create(req.body);
    console.log(createdEvent);
    res.redirect('/events/add')
    } catch(err){
        res.send(err);
    }
    
});

router.delete('/add', async (req, res) => {
    try {
        const deletedEvent = await Events.findByIdAndRemove(req.params.id);
        const foundUser = await Events.findOne({'events': req.params.id})
        foundUser.events.remove(req.params.id);
        foundUser.save();
        res.redirect('/events/add');
    } catch (err){
        res.send(err);
    }
})


module.exports = router;