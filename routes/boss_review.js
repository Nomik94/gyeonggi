const express = require('express');
const BossReviewController = require('../controllers/boss.review.controller');
const router = express.Router();

const bossReviewController = new BossReviewController();

router.get('/:userId', bossReviewController.getReviews, function (req, res) {
  return res.render('boss.review.html');
});

module.exports = router;
