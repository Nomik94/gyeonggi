const WorkShowService = require("../services/workshow.service");

class WorkShowController {
    workShowService = new WorkShowService();


    getWork = async (req, res, next) => {
        const WorkShow = await this.workShowService.findAllWork();
    
        res.status(200).json({ data: WorkShow });
      };
}


module.exports = WorkShowController;