const { user_signup } = require('../services/user.post.service');

class UserController {
  signup = async (req, res) => {
    try {
      const { email, password, password_confirm, authority, name, nickname, phone_num, adress } = req.body;

      const singupResult = await user_signup(
        email,
        password,
        password_confirm,
        authority,
        name,
        nickname,
        phone_num,
        adress
      );

      return res.status(200).send({
        result: singupResult,
        message: '회원가입 성공',
      });
    } catch (error) {
      console.log(error);
    }
  };
}

module.exports = UserController;
