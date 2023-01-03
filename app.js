const express = require("express");
const app = express();

// ejs 설정
const ejs = require('ejs');

const port = 8080;

const router = require("./routes");
const path = require("path");

app.use(express.static("static"));

app.use(express.urlencoded({extended:false}),router);


// 시작페이지
router.get("/", (req,res)=>{
    return res.sendFile(__dirname + "/static/userPage.html");
});

// view engine setup
app.set('views', path.join(__dirname, 'templates'));
app.set('view engine', 'ejs');

// 시작 페이지를 제외한 모든 페이지는 api를 거쳐간다. -> routes 안의 index로 간다.
app.use("/api",router);

app.listen(port,()=>{
    console.log("서버 열림");
});
