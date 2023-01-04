// controllers/login.controller.js
const crypto = require('crypto');

const LoginService = require('../services/login.service');

class LoginController {
  loginService = new LoginService();

  postLogin = async (req, res, next) => {
    try {
      const { email, password } = req.body;

      const hashPassword = crypto.createHash('sha512').update(req.body.password + 10).digest('hex');

      const userId = await this.loginService.findOne(email, hashPassword);

      const token = await this.loginService.issueToken(userId);

      res.cookie('token', token['token']);
      res.status(200).json({
        result: 'success',
        token: token,
        userId: userId,
      });
    } catch (err) {
      res.status(400).json({
        errorMessage: '로그인에 실패하였습니다.',
      });
    }
  };
}

module.exports = LoginController;
