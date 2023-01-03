const express = require('express');
// const nunjucks = require("nunjucks");
// const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
// const jwt = require("jsonwebtoken");
const ejs = require('ejs');

const app = express();
app.use(cookieParser());

const router = require('./routes');
const express_render = require('./renders');

// nunjucks 템플릿 언어 선언
// app.set('view engine', 'html');
// nunjucks.configure('templates', {
//     express: app,
//     watch: true,
// });

app.set('view engine', 'ejs');
app.set('views', './templates');

// 쿠키 가져오기
// app.get('/api', function (req, res) {
//   const token = req.cookies['token'];

//   if(!token) {
//     console.log("로그인 후 이용해 주세요!");
//     return;
//   }

//   const { userId } = jwt.verify(token, process.env.SECRET_KEY);
//   console.log(`${userId.userId} 님이 로그인 하셨습니다.`);
// })

app.use(express.json());
app.use(express.urlencoded( {extended : false } ));


app.use('/api', router);
app.use('/', express_render);

app.listen(process.env.PORT, () => {
  console.log(process.env.PORT, '포트로 서버가 열렸어요!');
});
