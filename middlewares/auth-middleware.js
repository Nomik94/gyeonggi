// middlewares/auth-middleware.js

const jwt = require('jsonwebtoken');
const cookieParser = require('cookie-parser');

const { user } = require('../models/user');

const app = express();
app.use(cookieParser());

module.exports = (req, res, next) => {
    const token = req.cookies['token'];

    if(!token){
        res.status(401).send({
            errorMessage: "로그인 후 이용해 주세요."
        });

        return;
    }

    try {
        const { userId } = jwt.verify(token, process.env.SECRET_KEY);
        user.findByPk(userId).then((user) => {
            res.locals.user = user;ㄴ
            next();
        });
    } catch (err) {
        res.status(401).send({
            errorMessage: "이미 로그인이 되어 있습니다."
        });
    }
};