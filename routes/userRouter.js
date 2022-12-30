const express = require("express");
const router = express.Router();
const multer  = require('multer')
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, 'static/img/') // cb 콜백함수를 통해 전송된 파일 저장 디렉토리 설정
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname) // cb 콜백함수를 통해 전송된 파일 이름 설정
    }
});
let upload = multer({ storage: storage })


// 게시글 조회
router.post("/laundry",upload.single('myimg'),(res,req)=>{
    console.log(res.file);
    console.log(res.body.needs)

});

module.exports = router;