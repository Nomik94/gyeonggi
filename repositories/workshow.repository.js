const { Work } = require('../models');
const { User } = require('../models');
const { Op } = require('sequelize');

class WorkShowRepository {
  constructor(WorkModel) {
    this.WorkModel = WorkModel;
  }
  findAllWork = async () => {
    const Works = await this.WorkModel.findAll({
      where: { status: 0 },
      raw: true,
      attributes: [
        'workId',
        'createdAt',
        'status',
        'img',
        'userWanted',
        'User.name',
        'User.address',
      ],
      include: [
        {
          model: User,
          attributes: [],
        },
      ],
    });
    return Works;
  };
  findAllStartWork = async (userId) => {
    const StartWorks = await this.WorkModel.findAll({
      where: { [Op.and]: [{ status: 1 }, { boss_id: userId }] },
      raw: true,
      attributes: [
        'createdAt',
        'status',
        'img',
        'userWanted',
        'User.name',
        'User.address',
      ],
      include: [
        {
          model: User,
          attributes: [],
        },
      ],
    });
    return StartWorks;
  };
}

module.exports = WorkShowRepository;