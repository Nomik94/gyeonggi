const express = require('express');
const app = express();
const port = 4000;
const ejs = require('ejs');
const bodyParser = require('body-parser');
app.use(bodyParser.urlencoded({ extended: true }));

const routes = require('./routes');

app.use(express.json());
app.use('/api', routes);

app.set('view engine', 'ejs');
app.set('views', './templates');

app.get('/', (req, res) => {
  res.render('bossPage');
});

app.listen(port, () => {
  console.log(port, '포트로 서버가 열렸어요!');
});

module.exports = app;
