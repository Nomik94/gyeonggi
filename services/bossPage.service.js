const BossPageRepository = require('../repositories/bossPage.repository');
const { User, Work } = require('../models');

class BossPageService {
  bossPageRepository = new BossPageRepository(User, Work);

  findStartWork = async (userId) => {
    const allStartWork = await this.bossPageRepository.findAllStartWork(userId);

    for (let i = 0; i < allStartWork.length; i++) {
      if (allStartWork[i].status === 1) {
        allStartWork[i].status = '수거 중';
      } else if (allStartWork[i].status === 2) {
        allStartWork[i].status = '수거 완료';
      } else if (allStartWork[i].status === 3) {
        allStartWork[i].status = '배송 중';
      } else if (allStartWork[i].status === 4) {
        allStartWork[i].status = '배송 완료';
      } else if (allStartWork[i].status === 5) {
        allStartWork[i].status = '리뷰 확인';
      }
    }

    allStartWork.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });
    return allStartWork.map((StartWorks) => {
      return {
        workId: StartWorks.workId,
        name: StartWorks.name,
        address: StartWorks.address,
        phoneNumber: StartWorks.phoneNumber,
        status: StartWorks.status,
        img: StartWorks.img,
        userWanted: StartWorks.userWanted,
        createdAt: StartWorks.createdAt,
        point: StartWorks.point,
      };
    });
  };
}

module.exports = BossPageService;
