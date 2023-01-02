// controllers/signup.controller.js

const SignupService = require('../services/signup.service');

class SignupController {
    signupService = new SignupService();

    postSignup = async (req, res, next) => {
        const { userType, email, phoneNumber, password, name, address, point } = req.body;

        const createUserData = await this.signupService.createUser(userType, email, phoneNumber, password, name, address, point);

        res.status(200).json({ result: "success", data : createUserData});
    }

}

module.exports = SignupController;