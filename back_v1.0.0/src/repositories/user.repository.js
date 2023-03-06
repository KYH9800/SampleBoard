class UserRepository {
  constructor(UserModel, MyInfoModel, UserImageModel) {
    this.userModel = UserModel;
    this.myInfoModel = MyInfoModel;
    this.userImageModel = UserImageModel;
  }

  signup = (email, password, authority, name, nickname, phone_num, adress) => {
    console.log('email: ', email);
    console.log('password: ', password);
    console.log('authority: ', authority);
    console.log('name: ', name);
    console.log('nickname: ', nickname);
    console.log('phone_num: ', phone_num);
    console.log('adress: ', adress);

    return {
      email,
      password,
      authority,
      name,
      nickname,
      phone_num,
      adress,
    };
  };
}

module.exports = UserRepository;
