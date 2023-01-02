const express = require('express');
const router = express.Router();

const bossReviewRouter = require('./boss_review');
router.use('/review', bossReviewRouter);
const WorkShowRouter = require('./workshow.routes');
router.use('/workshow', WorkShowRouter);

module.exports = router;
