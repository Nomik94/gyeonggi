const { Review } = require('../models');

class BossReviewRepository {
  constructor(bossModel) {
    this.bossModel = bossModel;
  }
  findAllReview = async (userId) => {
    try {
      const reviews = await this.bossModel.findAll({
        attributes: ['Review.star', 'Review.content', 'Review.createdAt'],
        order: [['Review.createdAt', 'desc']],
        include: [
          {
            model: Work,
            attributes: [],
            where: { boss_id: userId },
            include: [
              {
                model: Review,
                attributes: [],
              },
            ],
          },
        ],
      });
      return reviews;
    } catch (error) {
      return error;
    }
  };
}

module.exports = BossReviewRepository;
