// repositories/users.repository.js

const { User } = require("../models");

class UserRepository {

    createUser = async(userType, email, phoneNumber, password, name, address, point) => {
        const createUserData = await User.create({ userType, email, phoneNumber, password, name, address, point });

        return createUserData;
    }

    findOne = async(email, password) => {
        const findUser = await User.findOne({
            where: {email, password}
        });

        return findUser;
    }

    findByPk = async(userId) => {
        const user = await User.findByPk(userId);

        return user;
    }

}

module.exports = UserRepository;