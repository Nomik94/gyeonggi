const BossPageService = require('../services/bossPage.service');

class BossPageController {
  bossPageService = new BossPageService();

  getStartWork = async (req, res, next) => {
    const userId = res.locals.user.userId;
    const startWorkShow = await this.bossPageService.findStartWork(userId);

    res.render('bossPage', { datas: startWorkShow });
  };
}

module.exports = BossPageController;
