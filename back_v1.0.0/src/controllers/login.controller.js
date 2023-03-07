const { user_login } = require('../services/login.service');

class LoginController {
  login = async (req, res) => {
    try {
      const { email, password } = req.body;

      const token = await user_login(email, password);

      return res.status(200).send({
        message: '로그인 성공',
        token: token,
      });
    } catch (error) {
      console.log(error);
      if (error.statusCode) {
        return res.status(error.statusCode).json({
          errorMessage: error.message,
          status: error.statusCode,
        });
      } else {
        return res.status(400).json({ errorMessage: '로그인에 실패 했습니다.' });
      }
    }
  };
}

module.exports = LoginController;
