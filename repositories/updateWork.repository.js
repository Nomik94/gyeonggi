class UpdateWorkRepository {
  constructor(UpdateWorkModel, UserModel) {
    this.UpdateWorkModel = UpdateWorkModel;
    this.userModel = UserModel;
  }
  updateWork = async (workId, status, userId) => {
    let stt = parseInt(status) + 1;
    await this.UpdateWorkModel.update({ status: stt, boss_id: userId }, { where: { workId } });
    const updateWork = stt;
    if (status === 3) {
      const user = await this.userModel.findByPk(userId);

      await this.userModel.update(
        {
          point: user.point + 10000,
        },
        { where: { userId:userId } }
      );
    }

    return updateWork;
  };
}

module.exports = UpdateWorkRepository;
