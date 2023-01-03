// middlewares/auth-middleware.js

const jwt = require('jsonwebtoken');

const { User } = require('../models');


module.exports = (req, res, next) => {
    const token = req.cookies.token;
    // console.log(token);

    if(!token){
        res.status(401).send({
            errorMessage: "로그인 후 이용해 주세요."
        });
        return;
    }

    try {
        const { userId } = jwt.verify(token, process.env.SECRET_KEY);

        const id = userId.userId;

        User.findByPk(id).then((user) => {
            res.locals.user = user;
            // console.log(user);
            next();
        });
    } catch (err) {
        res.status(401).send({
            errorMessage: "로그인을 다시 진행해 주세요."
        });
    }
};
