const UpdateWorkRepository = require("../repositories/updateWork.repository");
const { Work } = require('../models');

class UpdateWorkService {
    workShowRepository = new UpdateWorkRepository(Work);


    updateWork = async(workId, status) =>{
      const updateWork = await this.workShowRepository.updateWork(
            workId,
            status
          );
      return updateWork;
    }
}


module.exports = UpdateWorkService;