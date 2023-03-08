class UserRepository {
  constructor(UserModel, UserImageModel, MyInfoModel, PostModel) {
    this.userModel = UserModel;
    this.userImageModel = UserImageModel;
    this.myInfoModel = MyInfoModel;
    this.postModel = PostModel;
  }

  findUser = async (user_id) => {
    try {
      console.log('UserRepository user_id: ', user_id);

      const user = await this.userModel.findOne({
        where: {
          user_id: user_id,
        },
        attributes: ['user_id', 'email', 'authority'],
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
}

module.exports = UserRepository;
