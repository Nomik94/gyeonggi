const { Work } = require('../models');
const { User } = require('../models');


class UpdateWorkRepository {
    constructor(UpdateWorkModel){
        this.UpdateWorkModel = UpdateWorkModel;
    }
    updateWork = async (workId, status) => {
        console.log(workId, status);
        status += 1
        await this.UpdateWorkModel.update({status},{where:{workId}});
        const updateWork = status;
        return updateWork;
    }
}

module.exports = UpdateWorkRepository;