class SignupRepository {
  constructor(UserModel, MyInfoModel, UserImageModel) {
    this.userModel = UserModel;
    this.myInfoModel = MyInfoModel;
    this.userImageModel = UserImageModel;
  }

  // 이메일 중복확인
  findEmail = async (email) => {
    const findEmail = await this.userModel.findOne({
      where: {
        email: email,
      },
    });

    return findEmail;
  };

  // 닉네임 중복확인
  findNickname = async (nickname) => {
    const findNickname = await this.myInfoModel.findOne({
      where: {
        nickname: nickname,
      },
    });

    return findNickname;
  };

  // 회원가입
  signup = async (email, password, authority, name, nickname, phone_num, adress) => {
    const user = await this.userModel.create({
      email: email,
      password: password,
      authority: authority,
    });

    const myInfo = await this.myInfoModel.create({
      user_id: user.user_id,
      name: name,
      nickname: nickname,
      phone_num: phone_num,
      adress: adress,
    });

    return {
      user: user,
      myInfo: myInfo,
    };
  };
}

module.exports = SignupRepository;
