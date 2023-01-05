// services/login.service.js

const jwt = require('jsonwebtoken');

const UserRepository = require('../repositories/users.repository');

class LoginService {
    userRepository = new UserRepository();

    findOne = async(email, hashPassword) => {
        const findUser = await this.userRepository.findOne(email, hashPassword);

        return{
            userId: findUser.userId
        }
    }

    issueToken = async(userId) => {
        const token =jwt.sign({ userId: userId },
            process.env.SECRET_KEY,
            { expiresIn: "1d" }
            );

        return{
            token: token 
        }
    }

}

module.exports = LoginService;