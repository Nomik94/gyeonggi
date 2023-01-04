const BossReviewRepository = require('../repositories/bossReview.repository');
const { Review } = require('../models');

class BossReviewService {
  bossReviewRepository = new BossReviewRepository(Review);

  findAllReviews = async (userId) => {
    try {
      const allReview = await this.bossReviewRepository.findAllReview(userId);

      return allReview.map((review) => {
        return {
          star: review.star,
          content: review.content,
          createdAt: review.createdAt,
        };
      });
    } catch (error) {
      return error;
    }
  };
}

module.exports = BossReviewService;
