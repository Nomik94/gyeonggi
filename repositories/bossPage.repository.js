const { Op } = require('sequelize');
const { User } = require('../models');
class BossPageRepository {
  constructor(BossModel, WorkModel) {
    this.BossModel = BossModel;
    this.WorkModel = WorkModel;
  }

  findAllStartWork = async (userId) => {
    const user = await this.BossModel.findOne({
      where: { userId: userId },
      raw: true,
      attributes: ['point'],
    });

    const works = await this.WorkModel.findAll({
      attributes: [
        'workId',
        'createdAt',
        'status',
        'img',
        'userWanted',
        'user_id',
      ],
      where: {
        [Op.and]: [{ status: { [Op.gt]: 0 }, boss_id: userId }],
      },
      raw: true,
      include: [
        {
          model: User,
          attributes: [],
        },
      ],
    });

    const work = [];
    const point = user.point;
    work.push({
      point: point,
    });
    for (let i = 0; i < works.length; i++) {
      const workId = works[i].workId;
      const status = works[i].status;
      const img = works[i].img;
      const userWanted = works[i].userWanted;
      const createdAt = works[i].createdAt;
      const user = await User.findOne({
        where: { userId: works[i].user_id },
      });
      const name = user.name;
      const address = user.address;
      const phoneNumber = user.phoneNumber;
      work.push({
        workId: workId,
        name: name,
        status: status,
        img: img,
        userWanted: userWanted,
        address: address,
        createdAt: createdAt,
        phoneNumber: phoneNumber,
      });
    }

    return work;
  };
}

module.exports = BossPageRepository;
