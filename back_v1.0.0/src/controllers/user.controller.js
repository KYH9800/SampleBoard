const { findUser, updateUserInfo } = require('../services/user.service');

class UserController {
  // 내 정보 불러오기
  findUser = async (req, res) => {
    try {
      const user_id = res.locals.user;
      console.log('UserController user_id: ', user_id);
      const user = await findUser(user_id);

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

  // 내 정보 수정, 비밀번호 변경
  updateUserInfo = async (req, res) => {
    try {
      const user_id = res.locals.user;
      const { nickname, phoneNum, adress, password, newPassword, newPasswordConfirm } = req.body;

      const updateUser = await updateUserInfo(
        user_id,
        nickname,
        phoneNum,
        adress,
        password,
        newPassword,
        newPasswordConfirm
      );

      return res.status(201).send({
        result: updateUser,
        message: '내 정보 수정 성공',
      });
    } catch (error) {
      console.log('error: ', error);
      if (error.statusCode) {
        return res.status(error.statusCode).json({
          errorMessage: error.message,
          status: error.statusCode,
        });
      } else {
        return res.status(400).send({ errorMessage: '내 정보 수정에 실패 했습니다.' });
      }
    }
  };
}

module.exports = UserController;
