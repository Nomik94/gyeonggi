const express = require('express');
const router = express.Router();

const bossReviewRouter = require('./boss_review');
router.use('/review', bossReviewRouter);

module.exports = router;
