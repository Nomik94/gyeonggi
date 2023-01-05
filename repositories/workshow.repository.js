const { Work } = require('../models');
const { User } = require('../models');
const { use } = require('../routes/workshow.routes');

class WorkShowRepository {
  constructor(WorkModel) {
    this.WorkModel = WorkModel;
  }
  findAllWork = async () => {
  
    const Works = await this.WorkModel.findAll({
      where: { status: 0 },
      raw: true,
      attributes: [
        'workId',
        'createdAt',
        'status',
        'img',
        'userWanted',
        'user_id'
      ],
    });
    console.log(Works)
    const worksList = []
    for (let i = 0; i < Works.length; i++){
        const workId1 = Works[i].workId
        const createdAt1 = Works[i].createdAt
        const status1 = Works[i].status
        const img1 = Works[i].img
        const userWanted1 = Works[i].userWanted
        const user = await User.findOne(
          {where:{userId:Works[i].user_id}}
        )
        const username = user.name
        const useraddress = user.address
        const userphonenumber = user.phoneNumber

        worksList.push({
          workId : workId1,
          createdAt : createdAt1,
          status : status1,
          img : img1,
          userWanted : userWanted1,
          name:username,
          address:useraddress,
          phoneNumber:userphonenumber
        })
      }
      console.log(worksList)

    return worksList;
  };
}

module.exports = WorkShowRepository;
