class UserRepository {
  constructor(UserModel, UserImageModel, MyInfoModel, PostModel) {
    this.userModel = UserModel;
    this.userImageModel = UserImageModel;
    this.myInfoModel = MyInfoModel;
    this.postModel = PostModel;
  }

  // 내 정보 불러오기
  findUser = async (user_id) => {
    try {
      console.log('UserRepository user_id: ', user_id);

      const user = await this.userModel.findOne({
        where: {
          user_id: user_id,
        },
        attributes: ['user_id', 'email', 'authority', 'createdAt', 'updatedAt'],
        include: [
          {
            model: this.myInfoModel,
            attributes: ['name', 'nickname', 'phone_num', 'adress'],
            include: [
              {
                model: this.userImageModel,
                attributes: ['src'],
              },
            ],
          },
          {
            model: this.postModel,
          },
        ],
      });
      // console.log('db 요청 결과: ', user);
      return user;
    } catch (error) {
      console.log('error: ', error);
    }
  };

  // 비밀번호 수정을 위한 user 정보 찾기
  findUserPassword = async (user_id) => {
    const userPassword = await this.userModel.findOne({
      where: {
        user_id: user_id,
      },
      attributes: ['password'],
    });

    return userPassword;
  };

  // 내 정보 수정, 비밀번호 변경
  updatePassword = async (user_id, newPassword) => {
    const updatePassword = await this.userModel.update(
      {
        password: newPassword,
      },
      {
        where: {
          user_id: user_id,
        },
      }
    );

    return updatePassword;
  };

  // 비밀번호 변경
  updateUserInfo = async (user_id, nickname, phoneNum, adress) => {
    const updateUser = this.myInfoModel.update(
      {
        nickname: nickname,
        phone_num: phoneNum,
        adress: adress,
      },
      {
        where: {
          user_id: user_id,
        },
      }
    );

    return updateUser;
  };
}

module.exports = UserRepository;
