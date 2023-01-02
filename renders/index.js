const express = require('express');
const router = express.Router();

router.get('/api/signup', (req, res) => {
    try{
        res.render("sign");
    } catch (err) {
        console.log(`${req.method} ${req.originalUrl} : ${error.message}`);
        res.render('error');
    }
})

router.get('/api/login', (req, res) => {
    try{
        res.render("login");
    } catch (err) {
        console.log(`${req.method} ${req.originalUrl} : ${error.message}`);
        res.render('error');
    }
})

router.get('/api', (req, res) => {
    try{
        res.render("main");
    } catch (err) {
        console.log(`${req.method} ${req.originalUrl} : ${error.message}`);
        res.render('error');
    }
})

module.exports = router;