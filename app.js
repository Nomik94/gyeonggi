const express = require('express');
const nunjucks = require("nunjucks");
const bodyParser = require('body-parser');

const app = express();

const route = require('./routes');
const express_render = require('./renders');

// nunjucks 템플릿 언어 선언
app.set('view engine', 'html');
nunjucks.configure('templates', {
    express: app,
    watch: true,
});

app.use(express.json());

app.use(express.urlencoded( {extended : false } ));

app.use('/api', route);
app.use('/', express_render);

app.listen(process.env.PORT, () => {
  console.log(process.env.PORT, '포트로 서버가 열렸어요!');
});
