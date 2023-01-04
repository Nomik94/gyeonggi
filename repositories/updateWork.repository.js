class UpdateWorkRepository {
  constructor(UpdateWorkModel, UserModel) {
    this.UpdateWorkModel = UpdateWorkModel;
    this.userModel = UserModel;
  }
  updateWork = async (workId, status) => {
    let stt = parseInt(status) + 1;
    await this.UpdateWorkModel.update({ status: stt }, { where: { workId } });
    const updateWork = stt;
    if (status === 3) {
      const user = await this.userModel.findByPk(1);

      await this.userModel.update(
        {
          point: user.point + 10000,
        },
        { where: { userId: 1 } }
      );
    }

    return updateWork;
  };
}

module.exports = UpdateWorkRepository;
