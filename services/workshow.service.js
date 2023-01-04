const WorkShowRepository = require('../repositories/workshow.repository');
const { Work } = require('../models');

class WorkShowService {
  workShowRepository = new WorkShowRepository(Work);

  findAllWork = async () => {
    const allWork = await this.workShowRepository.findAllWork();
    for (let i = 0; i < allWork.length; i++) {
      if (allWork[i].status === 0) {
        allWork[i].status = '대기 중';
      }
    }
    allWork.sort((a, b) => {
      return b.createdAt - a.createdAt;
    });
    return allWork.map((Works) => {
      return {
        workId: Works.workId,
        name: Works.name,
        address: Works.address,
        status: Works.status,
        img: Works.img,
        userWanted: Works.userWanted,
        createdAt: Works.createdAt,
      };
    });
  };
}

module.exports = WorkShowService;
