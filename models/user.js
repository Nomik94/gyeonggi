'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      models.user.hasMany(models.work, { foreignKey: 'user_id' });
      models.user.hasMany(models.work, { foreignKey: 'boss_id' });
    }
  }
  User.init(
    {
      userId: {
        primaryKey: true,
        type: DataTypes.BIGINT,
      },
      userType: DataTypes.BIGINT,
      email: {
        type: DataTypes.STRING,
        unique: true,
      },
      phoneNumber: DataTypes.TEXT,
      password: DataTypes.TEXT,
      name: DataTypes.TEXT,
      address: DataTypes.TEXT,
      point: DataTypes.BIGINT,
    },
    {
      sequelize,
      modelName: 'User',
    }
  );
  return User;
};
