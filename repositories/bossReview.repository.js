const { Review } = require('../models');

class BossReviewRepository {
  constructor(bossModel) {
    this.bossModel = bossModel;
  }
  findAllReview = async (userId) => {
    const reviews = await this.bossModel.findAll({
      where: { user_id: userId },
      attributes: ['star', 'content', 'createdAt'],
    });

    return reviews;
  };
}

module.exports = BossReviewRepository;
