const express = require('express');
const app = express();
const port = 4000;

const routes = require('./routes');

app.use(express.json());
app.use('/api', routes);

app.get('/', (req, res) => {
  console.log(req.query);

  res.json({
    'keykey' : 'value입니다',
    "이릅입니다.":'이름일까요?',
  });
});

app.listen(port, () => {
  console.log(port, '포트로 서버가 열렸어요!');
});

module.exports = app;