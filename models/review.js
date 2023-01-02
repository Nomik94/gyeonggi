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
      models.Review.belongsTo(models.Work, {
        foreignKey: 'work_id',
        targetKey: 'workId',
        onDelete: 'cascade',
        onUpdate: 'cascade',
      });
      models.Review.belongsTo(models.User, {
        foreignKey: 'user_id',
        targetKey: 'userId',
        onDelete: 'cascade',
        onUpdate: 'cascade',
      });
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