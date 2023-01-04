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

    findAllUser = async(name) => {
        const findUsesrData = await this.userRepository.findAllUser(name);

        return findUsesrData.map(user => {
            return {
                userId: user.userId,
                email : user.email,
                phoneNumber: user.phoneNumber,
                name: user.name,
                address: user.address,
                createdAt: user.createdAt,
                updatedAt: user.updatedAt,
            }
        });
    }

}


module.exports = SignupService;