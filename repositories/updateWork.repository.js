const { Work } = require('../models');
const { User } = require('../models');


class UpdateWorkRepository {

    constructor(UpdateWorkModel){
        this.UpdateWorkModel = UpdateWorkModel;
    }
    updateWork = async (workId, status) => {
    
        let stt = parseInt(status)+1
        await this.UpdateWorkModel.update({status:stt},{where:{workId}});
        const updateWork = stt
        return updateWork;
    }
}

module.exports = UpdateWorkRepository;