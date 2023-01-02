const BossReviewService = require('../services/bossReview.service');

class BossReviewController {
  BossReviewService = new BossReviewService();

  getReviews = async (req, res) => {
    const { userId } = req.params;
    const reviews = await this.BossReviewService.findAllReviews(userId);
    console.log('reviews:', reviews);

    res.render('bossReview', { reviews: reviews });
  };
}

module.exports = BossReviewController;
