const { User, UserImage, MyInfo, Post } = require('../../models');

const UserRepository = require('../repositories/user.repository');
const userRepository = new UserRepository(User, UserImage, MyInfo, Post);
// custom error
const { CustomError } = require('../../utils/Error');

class UserService {
  findUser = async (user_id) => {
    try {
      console.log('UserService user_id: ', user_id);

      if (!user_id) {
        throw new CustomError('사용자 정보가 없습니다. 로그인을 다시 시도해주세요', 412);
      }

      const user = await userRepository.findUser(user_id);

      return user;
    } catch (error) {
      console.log('error: ', error);
    }
  };
}

module.exports = UserService;
