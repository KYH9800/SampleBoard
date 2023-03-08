const UserService = require('../services/user.service');
const userService = new UserService();

class UserController {
  findUser = async (req, res) => {
    try {
      const user_id = res.locals.user;
      console.log('UserController user_id: ', user_id);
      const user = await userService.findUser(user_id);

      return res.status(200).send({
        user,
      });
    } catch (error) {
      console.log('error: ', error);
      if (error.statusCode) {
        return res.status(error.statusCode).json({
          errorMessage: error.message,
          status: error.statusCode,
        });
      } else {
        return res.status(400).send({ errorMessage: '내 정보 불러오기에 실패 했습니다.' });
      }
    }
  };
}

module.exports = UserController;
