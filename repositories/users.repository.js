// repositories/users.repository.js

const { User } = require("../models");

class UserRepository {

    createUser = async(userType, email, phoneNumber, password, name, address) => {
        const createUserData = await User.create({ userType, email, phoneNumber, password, name, address });

        return createUserData;
    }

}

module.exports = UserRepository;