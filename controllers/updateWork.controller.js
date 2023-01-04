const UpdateWorkService = require('../services/UpdateWork.service');

class UpdateWorkController {
  updateWorkService = new UpdateWorkService();

  updateWork = async (req, res, next) => {
    const userId = res.locals.user.userId;
    const { workId, status } = req.body;
    const updateWork = await this.updateWorkService.updateWork(workId, status);
    if (updateWork === 0) {
      res.status(200).json({ msg: '대기 중' });
    } else if (updateWork === 1) {
      res.status(200).json({ msg: '수거 중' });
    } else if (updateWork === 2) {
      res.status(200).json({ msg: '수거 완료' });
    } else if (updateWork === 3) {
      res.status(200).json({ msg: '배송 중' });
    } else if (updateWork === 4) {
      res.status(200).json({ msg: '배송 완료' });
    } else if (updateWork === 5) {
      res.status(200).json({ msg: '리뷰 확인' });
    }
  };
}

module.exports = UpdateWorkController;
