const BossReviewRepository = require('../repositories/boss.review.repository');
const { Review } = require('../models');

class BossReviewService {
  BossReviewRepository = new BossReviewRepository(Review);

  findAllReviews = async (userId) => {
    const allReview = await this.BossReviewRepository.findAllReview(userId);

    allReview.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });

    return allReview.map((review) => {
      return {
        star: review.star,
        content: review.content,
        createdAt: review.createdAt,
      };
    });
  };
}

module.exports = BossReviewService;
