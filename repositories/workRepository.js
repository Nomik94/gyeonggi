class WorkRepository {
  // this.workModel에 works테이블을 할당 해줌
  constructor(workModel, userModel) {
    this.workModel = workModel;
    this.userModel = userModel;
  }

  findAllWork = async (userId2) => {
    console.log('re', userId2);
    const works = await this.workModel.findAll({
      where: { user_id: userId2 },
    });
    const user = await this.userModel.findOne({
      where: { userId: userId2 },
    });
    const workss = [];
    for (let i = 0; i < works.length; i++) {
      const workId = works[i].dataValues.workId;
      const name = user.dataValues.name;
      const phone = user.dataValues.phoneNumber;
      const address = user.dataValues.address;
      const img = works[i].dataValues.img;
      const need = works[i].dataValues.userWanted;
      const status = works[i].dataValues.status;
      workss.push({
        workId: workId,
        name: name,
        phone: phone,
        address: address,
        img: img,
        need: need,
        status: status,
      });
    }
    return workss;
  };

  createWork = async (userId, img, needs) => {
    try {
      // 서비스에서 가져온 값을 가지고 데이터를 데이터 베이스에 넣어줌
      const createData = [];
      const createWork = await this.workModel.create({
        user_id: userId,
        img: img,
        status: 0,
        userWanted: needs,
      });
      // 지금 접속중인 유저를 찾아옴
      const user = await this.userModel.findByPk(userId);
      // 유저의 포인트가 10000보다 적으면 포인트가 부족하다고 반환
      if (user.point < 10000) {
        return { msg: '포인트가 부족합니다.' };
      }
      // 유저의 포인트가 10000보다 많으면 기존 포인트 -10000을 users테이블에 업데이트
      await this.userModel.update(
        {
          point: user.point - 10000,
        },
        { where: { userId: userId } }
      );
      createData.push(createWork, user);
      return createData;
    } catch (e) {
      return e;
    }
  };
}

module.exports = WorkRepository;
