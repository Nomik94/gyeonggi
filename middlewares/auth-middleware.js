// middlewares/auth-middleware.js

const jwt = require('jsonwebtoken');
// const cookieParser = require('cookie-parser');
// const express = require('express');

const { User } = require('../models/user');

// const app = express();
// app.use(cookieParser());

module.exports = (req, res, next) => {
    const token = req.cookies.token;
    console.log(token);

    if(!token){
        res.status(401).send({
            errorMessage: "로그인 후 이용해 주세요."
        });
        return;
    }

    // const { userId } = jwt.verify(token, process.env.SECRET_KEY);
    // console.log(userId);

    try {
        const { userId } = jwt.verify(token, process.env.SECRET_KEY);
        console.log( userId );

        // console.log(res.locals.user);
        console.log(User.findByPk(userId)); // 여기서 막힘...이유를 찾아야함!!!!!
        User.findByPk(userId.userId).then((user) => {
            res.locals.user = user;
            next();
        });
        console.log(res.locals.user);
    } catch (err) {
        res.status(401).send({
            errorMessage: "이미 로그인이 되어 있습니다."
        });
    }
};
