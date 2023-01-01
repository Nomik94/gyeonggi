const express = require('express');
const router = express.Router();

// const postsRouter = require('./posts.routes');
const signupRouter = require('./signup.route');
const loginRouter = require('./login.route');

// router.use('/posts', postsRouter);
router.use('/signup', signupRouter);
router.use('/login', loginRouter);

module.exports = router;
