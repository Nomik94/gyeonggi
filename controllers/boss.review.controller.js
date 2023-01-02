const BossReviewService = require('../services/boss.review.service');

class BossReviewController {
  BossReviewService = new BossReviewService();

  getReviews = async (req, res) => {
    const { userId } = req.params;
    const reviews = await this.BossReviewService.findAllReviews(userId);

    res.status(200).json({ data: reviews });
  };
}

module.exports = BossReviewController;
