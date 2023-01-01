'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // models.review.belongsTo(models.work, { foreignKey: 'work_id' });
    }
  }
  Review.init(
    {
      reviewId: {
        primaryKey: true,
        type: DataTypes.BIGINT,
      },
      content: DataTypes.TEXT,
      star: DataTypes.BIGINT,
    },
    {
      sequelize,
      modelName: 'Review',
    }
  );
  return Review;
};
