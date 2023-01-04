// controllers/login.controller.js

const LoginService = require('../services/login.service');

class LoginController {
  loginService = new LoginService();

  postLogin = async (req, res, next) => {
    try {
      const { email, password } = req.body;

      const userId = await this.loginService.findOne(email, password);

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
