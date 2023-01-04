const WorkShowService = require('../services/workshow.service');

class WorkShowController {
  workShowService = new WorkShowService();

  getWork = async (req, res, next) => {
    const WorkShow = await this.workShowService.findAllWork();

    res.status(200).json({ data: WorkShow });
  };
  getStartWork = async (req, res, next) => {
    const userId = res.locals.user.userId;
    const startWorkShow = await this.workShowService.findStartWork(userId);
    console.log(startWorkShow);
    res.render('bossPage', { datas: startWorkShow });
  };
}

module.exports = WorkShowController;
