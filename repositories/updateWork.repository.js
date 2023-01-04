const { Work } = require('../models');
const { User } = require('../models');


class UpdateWorkRepository {
    constructor(UpdateWorkModel){
        this.UpdateWorkModel = UpdateWorkModel;
    }
    updateWork = async (workId, status) => {
        console.log(workId, status);
        let stt = status+1
        await this.UpdateWorkModel.update({status:stt},{where:{workId}});
        const updateWork = stt
        console.log(stt)
        return updateWork;
    }
}

module.exports = UpdateWorkRepository;