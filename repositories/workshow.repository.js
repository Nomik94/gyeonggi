const { resolveInclude } = require('ejs');
const { Work } = require('../models');
const { User } = require('../models');
const { Op } = require('sequelize');

class WorkshowRepository {

    constructor(workModel){
        this.workModel = workModel;
    }
    findAllwork = async () => {

        const works = await this.workModel.findAll({
            where: {status:0},
            raw: true,
            attributes: ['createdAt', 'status','img', 'userWanted', 'User.name', 'User.address'],
            include: [
                {
                    model: User,
                    attributes: [],
                }
            ]
        });
        console.log(works)
        return works;
    }
}

module.exports = WorkshowRepository;