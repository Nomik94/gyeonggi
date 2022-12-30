const express = require("express");
const jwt = require("jsonwebtoken");
const cookieParser = require("cookie-parser");

const app = express();
const router = express.Router();

const userRouter = require("./routes/userRouter");
const {static} = require("express");

app.use("/",express.urlencoded({extended:false}),router);

app.use(express.static("static"));
router.get("/", (req,res)=>{
   return res.sendFile(__dirname + "/static/userPage.html");
});

app.use("/api",userRouter);

app.listen(8080,(req,res)=>{
    console.log("서버 열림");
});


module.exports = app;