const { Work } = require('../models');

class BossReviewRepository {
  constructor(bossModel) {
    this.bossModel = bossModel;
  }
  findAllReview = async (userId) => {
    try {
      const reviews = await this.bossModel.findAll({
        attributes: ['Work.workId', 'star', 'content', 'createdAt'],
        order: [['createdAt', 'desc']],
        include: [
          {
            model: Work,
            attributes: [],
            where: { boss_id: userId },
          },
        ],
      });
      console.log(reviews);
      return reviews;
    } catch (error) {
      return error;
    }
  };
}

module.exports = BossReviewRepository;
