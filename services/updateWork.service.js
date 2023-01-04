const UpdateWorkRepository = require("../repositories/updateWork.repository");
const { Work } = require('../models');

class UpdateWorkService {
    workShowRepository = new UpdateWorkRepository(Work);


    updateWork = async(workId, status) =>{
      console.log(workId, status);
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
      }

      const updateWork = await this.workShowRepository.updateWork(
            workId,
            status
          );
      return updateWork;
    }
}


module.exports = UpdateWorkService;