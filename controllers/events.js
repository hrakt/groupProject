const express   = require('express');
const router    = express.Router();
const Events    = require('../models/events');


router.get('/add' , async(req,res) =>{
    try{
        res.render('events/add.ejs');
    }catch(err){
        res.send(err);
    }
});

router.get('/index', async(req,res)=>{
    try{
        const foundEvents = await Events.find({});
        res.render('events/index.ejs',{
            events: foundEvents}
    )
    }catch(err){
        res.send(err);
    }
})

router.post('/add', async(req,res)=>{
    const createdEvent = await Events.create(req.body);
    console.log(createdEvent);
    res.redirect('/events')
});

module.exports = router;