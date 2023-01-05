// repositories/users.repository.js

const { User } = require("../models");

class UserRepository {

    createUser = async(userType, email, phoneNumber, hashPassword, name, address, point) => {
        const createUserData = await User.create({ userType, email, phoneNumber, password:hashPassword, name, address, point });

        return createUserData;
    }

    findOne = async(email, hashPassword) => {
        const findUser = await User.findOne({
            where: {email, password:hashPassword}
        });

        return findUser;
    }

    findAllUser = async(name) => {
        const users = await User.findAll({
            where: { name }
        });
        return users;
    }

}

module.exports = UserRepository;