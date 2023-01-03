// middlewares/auth-middleware.js

const jwt = require('jsonwebtoken');
// const cookieParser = require('cookie-parser');
// const express = require('express');

const { User } = require('../models');

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

        const id = userId.userId;
        // console.log(id);

        // console.log(res.locals.user);
        console.log(User.findByPk(id));
        User.findByPk(id).then((user) => {
            res.locals.user = user;
            // console.log(user);
            next();
        });
        console.log(res.locals.user);
    } catch (err) {
        res.status(401).send({
            errorMessage: "로그인 후 이용해 주세요.222"
        });
    }
};
