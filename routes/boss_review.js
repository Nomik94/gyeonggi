const express = require('express');
const BossReviewController = require('../controllers/boss.review.controller');
const router = express.Router();

const bossReviewController = new BossReviewController();

router.get('/:userId', bossReviewController.getReviews);

module.exports = router;
