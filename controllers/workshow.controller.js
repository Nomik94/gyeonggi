const WorkshowService = require("../services/workshow.service");

class WorkshowController {
    workshowService = new WorkshowService();


    getWork = async (req, res, next) => {
        const workshow = await this.workshowService.findAllwork();
    
        res.status(200).json({ data: workshow });
      };





}



module.exports = WorkshowController;