const { Review } = require('../models');

class BossReviewRepository {
  constructor(bossModel) {
    this.bossModel = bossModel;
  }
  findAllReview = async (userId) => {
    const reviews = await this.bossModel.findAll({
      where: { user_id: userId },
      // raw: true,
      attributes: ['star', 'content', 'createdAt'],
      // include: [
      //   {
      //     model: Review,
      //     attributes: [],
      //   },
      // ],
    });

    return reviews;
  };
}

module.exports = BossReviewRepository;
