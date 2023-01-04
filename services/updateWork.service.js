const UpdateWorkRepository = require('../repositories/updateWork.repository');
const { Work } = require('../models');
const { User } = require('../models');

class UpdateWorkService {
  workShowRepository = new UpdateWorkRepository(Work, User);

  updateWork = async (workId, status) => {
    if (status === '대기 중') {
      status = 0;
    } else if (status === '수거 중') {
      status = 1;
    } else if (status === '수거 완료') {
      status = 2;
    } else if (status === '배송 중') {
      status = 3;
    } else if (status === '배송 완료') {
      status = 4;
    } else if (status === '리뷰 확인') {
      status = 5;
    }
    const updateWork = await this.workShowRepository.updateWork(workId, status);
    return updateWork;
  };
}

module.exports = UpdateWorkService;
