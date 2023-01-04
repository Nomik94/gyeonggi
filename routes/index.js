const express = require('express');
const router = express.Router();

// const postsRouter = require('./posts.routes');
const signupRouter = require('./signup.route');
const loginRouter = require('./login.route');
const workRouter = require('./workRoutes');
const reviewsRouter = require('./reveiwsRouter');

const authMiddleware = require("../middlewares/auth-middleware");


// router.use('/posts', postsRouter);
router.use('/signup', signupRouter);
router.use('/login', loginRouter);

// authMiddleware
router.get("/users/me", authMiddleware, async (req, res) => {

  res.json({ result: "success" , user: res.locals.user });

});

router.use('/', workRouter,reviewsRouter);

module.exports = router;
