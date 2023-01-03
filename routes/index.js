// api/를 통과하는 router
const express = require('express');
const router = express.Router();

const workRouter = require('./workRoutes');
const reviewsRouter = require('./reveiwsRouter');

router.use('/api', workRouter,reviewsRouter);

module.exports = router;
