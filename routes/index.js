const express = require('express');
const router = express.Router();

// const postsRouter = require('./posts.routes');
const signupRouter = require('./signup.route');
const loginRouter = require('./login.route');

const authMiddleware = require("../middlewares/auth-middleware");

// router.use('/posts', postsRouter);
router.use('/signup', signupRouter);
router.use('/login', loginRouter);

// authMiddleware 테스트
router.get("/users/me", authMiddleware, async (req, res) => {
//   console.log(res.locals.user);
  res.send({ user: res.locals.user });
    // const { user } = res.locals;
    // res.send({user,});
});

module.exports = router;
