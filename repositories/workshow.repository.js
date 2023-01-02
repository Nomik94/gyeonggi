const { Work } = require('../models');
const { User } = require('../models');

class WorkShowRepository {
  constructor(WorkModel) {
    this.WorkModel = WorkModel;
  }
  findAllWork = async () => {
    const Works = await this.WorkModel.findAll({
      where: { status: 0 },
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
    return Works;
  };
  findAllStartWork = async () => {
    const StartWorks = await this.WorkModel.findAll({
      where: { status: 1 },
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
