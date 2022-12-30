const Review = require('../models/review');

class BossReviewRepository {
  constructor(bossModel) {
    this.bossModel = bossModel;
  }
  findAllReview = async (userId) => {
    const reviews = await this.bossModel.findAll({
      where: { user_id: userId },
      raw: true,
      attributes: ['Review.star', 'Review.content'],
      include: [
        {
          model: Review,
          attributes: [],
        },
      ],
    });

    return reviews;
  };
}

module.exports = BossReviewRepository;
