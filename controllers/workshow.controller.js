const WorkShowService = require('../services/workshow.service');

class WorkShowController {
  workShowService = new WorkShowService();

  getWork = async (req, res, next) => {
    const WorkShow = await this.workShowService.findAllWork();

    res.render('workShow', { datas: WorkShow });
  };
}

module.exports = WorkShowController;
