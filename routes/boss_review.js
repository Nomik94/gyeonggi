const express = require('express');
const BossReviewController = require('../controllers/bossReview.controller');
const authMiddleware = require('../middlewares/auth-middleware');
const router = express.Router();

const bossReviewController = new BossReviewController();

router.get('/', authMiddleware, bossReviewController.getReviews);

module.exports = router;
