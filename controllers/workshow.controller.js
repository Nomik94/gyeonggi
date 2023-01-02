const WorkShowService = require("../services/workshow.service");

class WorkShowController {
    workshowService = new WorkShowService();


    getWork = async (req, res, next) => {
        const WorkShow = await this.workshowService.findAllwork();
    
        res.status(200).json({ data: WorkShow });
      };





}



module.exports = WorkShowController;