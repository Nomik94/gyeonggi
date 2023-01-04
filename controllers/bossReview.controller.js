const BossReviewService = require('../services/bossReview.service');

class BossReviewController {
  BossReviewService = new BossReviewService();

  getReviews = async (req, res) => {
    const userId = res.locals.user.userId;
    const reviews = await this.BossReviewService.findAllReviews(userId);
    res.status(200).render('bossReview', { reviews: reviews });
  };
}

module.exports = BossReviewController;
