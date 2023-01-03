const express = require('express');
const router = express.Router();

const bossReviewRouter = require('./boss_review');
const WorkShowRouter = require('./workshow.routes');
const UpdateWorkRouter = require('./updatework.routes');
router.use('/review', bossReviewRouter);
router.use('/workshow', [WorkShowRouter, UpdateWorkRouter]);
router.use('/updatework', UpdateWorkRouter);

module.exports = router;
