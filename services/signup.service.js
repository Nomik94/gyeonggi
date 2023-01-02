// services/signup.service.js

const SignupRepository = require('../repositories/users.repository');

class SignupService {
    signupRepository = new SignupRepository();

    createUser = async (userType, email, phoneNumber, password, name, address, point) => {
        const createUserData = await this.signupRepository.createUser(userType, email, phoneNumber, password, name, address, point);

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