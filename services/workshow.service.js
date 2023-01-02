const WorkShowRepository = require("../repositories/workshow.repository");
const { Work } = require('../models');

class WorkShowService {
    workShowRepository = new WorkShowRepository(Work);

    findAllwork = async() =>   {
        const allwork = await this.workShowRepository.findAllwork();

        allwork.sort((a, b) => {
            return b.createdAt - a.createdAt;
        })
        return allwork.map(Works => {
            return{
                name : Works.name,
                address : Works.address,
                status : Works.status,  
                img : Works.img,
                userWanted : Works.userWanted,
                createdAt : Works.createdAt
            }
        })
    }
}


module.exports = workShowService;