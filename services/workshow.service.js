const WorkShowRepository = require('../repositories/workshow.repository');
const { Work } = require('../models');

class WorkShowService {
  workShowRepository = new WorkShowRepository(Work);

  findAllWork = async () => {
    const allWork = await this.workShowRepository.findAllWork();
    allWork.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });
    return allWork.map((Works) => {
      return {
        name: Works.name,
        address: Works.address,
        status: Works.status,
        img: Works.img,
        userWanted: Works.userWanted,
        createdAt: Works.createdAt,
      };
    });
  };

  findStartWork = async (userId) => {
    const allStartWork = await this.workShowRepository.findAllStartWork(userId);

    for (let i = 0; i < allStartWork.length; i++) {
      if (allStartWork[i].status === 1) {
        allStartWork[i].status = '수거 중';
      } else if (allStartWork[i].status === 2) {
        allStartWork[i].status = '수거 완료';
      } else if (allStartWork[i].status === 3) {
        allStartWork[i].status = '배송 중';
      } else if (allStartWork[i].status === 4) {
        allStartWork[i].status = '배송 완료';
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
        status: StartWorks.status,
        img: StartWorks.img,
        userWanted: StartWorks.userWanted,
        createdAt: StartWorks.createdAt,
        point: StartWorks.point,
      };
    });
  };
}

module.exports = WorkShowService;
