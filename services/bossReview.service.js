const BossReviewRepository = require('../repositories/bossReview.repository');
const { Review } = require('../models');

class BossReviewService {
  BossReviewRepository = new BossReviewRepository(Review);

  findAllReviews = async (userId) => {
    try {
      const allReview = await this.BossReviewRepository.findAllReview(userId);

      allReview.sort((a, b) => {
        return b.createdAt - a.createdAt;
      });
      // let sum = 0;
      // let avgScore = 0;

      // for (let i = 0; i < allReview.length; i++) {
      //   sum += allReview[i].dataValues.star;
      //   return (avgScore = sum / allReview.length);
      // }
      // console.log(avgScore);

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
