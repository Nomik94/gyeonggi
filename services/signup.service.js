// services/signup.service.js

const UserRepository = require('../repositories/users.repository');

class SignupService {
    userRepository = new UserRepository();

    createUser = async (userType, email, phoneNumber, password, name, address, point) => {
        const createUserData = await this.userRepository.createUser(userType, email, phoneNumber, password, name, address, point);

        return{
            userId: createUserData.userId,
            email : createUserData.email,
            phoneNumber: createUserData.phoneNumber,
            name: createUserData.name,
            address: createUserData.address,
            createdAt: createUserData.createdAt,
            updatedAt: createUserData.updatedAt,
        };
    }

}


module.exports = SignupService;