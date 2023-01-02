const WorkRepository = require("../repositories/workRepository");
const {Work} = require("../models");
const {User} = require("../models");

class WorkService {
    //레포지토리에 데이터 테이블은 넘겨줌
    workRepository = new WorkRepository(Work,User);

    findAllWorks = async ()=>{
        const allWork = await this.workRepository.findAllWork();

        // 정령 시간순
        allWork.sort((a,b)=>{
            return b.createdAt - a.createdAt;
        })
        console.log("allwork",allWork);
        return allWork.map(work=>{
            return{
                workId:work.workId,
                userId:work.user_id
            }
        });

    }
    //createWork 실행 !! 컨트롤러 28번 라인에서 넣어준 변수를 받아옴
    createWork = async (userId,img,needs)=>{
        // createWorkData에 workRepository의 createWork의 리턴값을 넣어줌
        const createWorkData = await this.workRepository.createWork(userId,img,needs);
        return createWorkData;
    }
}


module.exports = WorkService;