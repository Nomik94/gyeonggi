const express = require('express');
const router = express.Router();

const authMiddleware = require('../middlewares/auth-middleware');
const signupRouter = require('./signup.route');
const loginRouter = require('./login.route');
const bossReviewRouter = require('./boss_review');
const WorkShowRouter = require('./workshow.routes');
const UpdateWorkRouter = require('./updatework.routes');

router.use('/review', bossReviewRouter);
router.use('/workshow', [WorkShowRouter, UpdateWorkRouter]);
router.use('/updatework', UpdateWorkRouter);

router.use('/signup', signupRouter);
router.use('/login', loginRouter);

// authMiddleware
router.get('/users/me', authMiddleware, async (req, res) => {
  res.json({ result: 'success', user: res.locals.user });
});

module.exports = router;
