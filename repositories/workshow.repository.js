const { Work } = require('../models');
const { User } = require('../models');


class WorkShowRepository {

    constructor(WorkModel){
        this.WorkModel = WorkModel;
    }
    findAllWork = async () => {

        const Works = await this.WorkModel.findAll({
            where: {status:0},
            raw: true,
            attributes: ['workId', 'createdAt', 'status','img', 'userWanted', 'User.name', 'User.address'],
            include: [
                {
                    model: User,
                    attributes: [],
                }
            ]
        });
        console.log(Works)
        return Works;
    }
}

module.exports = WorkShowRepository;