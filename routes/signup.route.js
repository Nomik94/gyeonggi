// routes/signup.route.js

const express = require("express");
const router = express.Router();

const SignupController = require('../controllers/signup.controller');
const signupcontroller = new SignupController();

router.post('/', signupcontroller.postSignup);


module.exports = router;