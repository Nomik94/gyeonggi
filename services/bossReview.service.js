const BossReviewRepository = require('../repositories/bossReview.repository');
const { Work } = require('../models');

class BossReviewService {
  bossReviewRepository = new BossReviewRepository(Work);

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
