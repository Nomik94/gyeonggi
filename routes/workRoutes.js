const express = require("express");
const router = express.Router();
// 파일 업로드를 위한 패키지
const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'static/img/') // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname) // cb 콜백함수를 통해 전송된 파일 이름 설정
    }
});
let upload = multer({ storage: storage });
// 여기까지

// 컨트롤러 가져오기
const WorksController = require('../controllers/workController');
// 컨트롤러를 사용하기 위한 선언
const worksController = new WorksController();

// 서비스 신청내역 가져오기
router.get("/laundry",worksController.getWorks);


// 기존url+/laundry가 url로 들어 왔을 때  컨트롤러의 createWork로 이동
router.post("/laundry",upload.single('myimg'),worksController.createWork);

module.exports = router;
