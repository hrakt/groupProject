const express = require('express');
const router = express.Router();


router.get('/login', (req, res) => {
    console.log('login in')
    res.render('login.ejs')
})


module.exports = router;