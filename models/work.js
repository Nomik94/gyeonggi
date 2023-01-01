'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Work extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // models.work.hasMany(models.review, { foreignKey: 'work_id' });
      // models.work.belongsTo(models.user, { foreignKey: 'user_id' });
      // models.work.belongsTo(models.user, { foreignKey: 'boss_id' });
    }
  }
  Work.init(
    {
      workId: {
        primaryKey: true,
        type: DataTypes.BIGINT,
      },
      status: DataTypes.BIGINT,
      img: DataTypes.TEXT,
      userWanted: DataTypes.TEXT,
    },
    {
      sequelize,
      modelName: 'Work',
    }
  );
  return Work;
};
