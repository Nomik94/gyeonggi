// 서비스 가져오기
const WorkService = require("../services/workService");
const {render} = require("ejs");

// 클래스 생성
class workController{
    workService = new WorkService(); //postService 에 할당

    getWorks = async (req,res,next)=>{
        const works =await this.workService.findAllWorks();
        res.render("userPage",{works:works});
    }

    //createWork를 실행한다.
    createWork =  async (req,res,next)=>{
        // 받아온 데이터 변수에 선언하기
        const userId = 1;   //더미 데이터 id값
        let img = "";       //img는 값이 없을땐 "" 있을땐 해당값으로 변경 되기에 let으로 선언
        // 이미지 파일이 없을때
        if(req.file!==undefined){
            const {filename} = req.file;
            img = "localhost:8080/img/"+filename;
        }
        const {needs} = req.body; //요구사항 입력 받은 값을 가져오기

        // createWorkDate = workService의 리턴 값이므로 workService의createWork에(userId,img,needs) 값을 가지고 가자.
        const createWorkData = await this.workService.createWork(userId,img,needs);
        console.log("createWorkData Con",createWorkData);

        // 생성은 스테이터스 201
        res.redirect("/api/laundry");
    }
}

module.exports = workController;
