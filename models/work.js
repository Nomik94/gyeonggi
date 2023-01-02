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
      models.Work.hasOne(models.Review, {
        foreignKey: 'work_id',
        targetKey: 'workId',
        onDelete: 'cascade',
        onUpdate: 'cascade',
      });
      models.Work.belongsTo(models.User, {
        foreignKey: 'user_id',
        targetKey: 'userId',
        onDelete: 'cascade',
        onUpdate: 'cascade',
      });
      models.Work.belongsTo(models.User, {
        foreignKey: 'boss_id',
        targetKey: 'userId',
        onDelete: 'cascade',
        onUpdate: 'cascade',
      });
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