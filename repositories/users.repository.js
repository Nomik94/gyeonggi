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

    findAllUser = async(name) => {
        const users = await User.findAll({
            where: { name }
        });
        
        return users;
    }

}

module.exports = UserRepository;