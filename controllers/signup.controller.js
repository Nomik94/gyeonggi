// controllers/signup.controller.js

const SignupService = require('../services/signup.service');

class SignupController {
  signupService = new SignupService();

  postSignup = async (req, res, next) => {
    try {
      const { userType, email, phoneNumber, password, name, address, point } =
        req.body;
      const re_email = /^[a-z0-9]+@[a-z]+\.[a-z]{2,3}$/;
      const re_phoneNumber = /^[0-9]{3}-[0-9]{3,4}-[0-9]{4}$/;
      const re_password = /^(?=.*\d)(?=.*[a-zA-Z])[0-9a-zA-Z]{4,10}$/; //  4 ~ 10자 영문, 숫자 조합

      if (email.search(re_email) === -1) {
        res.status(412).send({
          errorMessage: 'ID의 형식이 일치하지 않습니다',
        });
        return;
      }
      if (phoneNumber.search(re_phoneNumber) === -1) {
        res.status(412).send({
          errorMessage:
            '핸드폰 번호를 숫자, -을 포함한 휴대전화 형식에 맞게 입력해주세요.',
        });
        return;
      }
      if (password.search(re_password) === -1) {
        res.status(412).send({
          errorMessage: '비밀번호를 4~10자 영문, 숫자 조합으로 입력해주세요.',
        });
        return;
      }
      if (password.search(name) !== -1) {
        res.status(412).send({
          errorMessage: '비밀번호에 이름이 포함되어 있습니다.',
        });
        return;
      }
      if (!address) {
        res.status(412).send({
          errorMessage: '주소를 입력해주세요.',
        });
        return;
      }
      const user = await this.signupService.findAllUser(name);

      if (user.length) {
        res.status(412).send({
          errorMessage: '중복된 이름입니다.',
        });
        return;
      }
      const createUserData = await this.signupService.createUser(
        userType,
        email,
        phoneNumber,
        password,
        name,
        address,
        point
      );
      res.status(200).json({ result: 'success', data: createUserData });
    } catch (err) {
      res.status(400).json({
        errorMessage: '요청한 데이터 형식이 올바르지 않습니다.',
      });
    }
  };
}

module.exports = SignupController;
