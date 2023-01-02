const express = require("express");
const express = require('express');
const cookieParser = require('cookie-parser');
const ejs = require('ejs');

const app = express();
app.use(cookieParser());

const path = require("path");
const router = require('./routes');
const express_render = require('./renders');

app.set('view engine', 'ejs');
app.set('views', './templates');

app.use(express.json());
app.use(express.urlencoded( {extended : false } ));

app.use('/api', router);
app.use('/', express_render);

app.listen(process.env.PORT, () => {
  console.log(process.env.PORT, '포트로 서버가 열렸어요!');
});


module.exports = app;