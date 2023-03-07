const { User, MyInfo, UserImage } = require('../../models');

const SignupRepository = require('../repositories/signup.repository');
const signupRepository = new SignupRepository(User, MyInfo, UserImage);
// custom error
const { CustomError } = require('../../utils/Error');

const bcrypt = require('bcrypt');

const user_signup = async (email, password, passwordConfirm, authority, name, nickname, phone_num, adress) => {
  authority = '사용자'; // 일반 사용자 권한

  const findUserEmail = await signupRepository.findEmail(email);
  const findUserNickname = await signupRepository.findNickname(nickname);

  if (findUserEmail) {
    throw new CustomError('이미 사용중인 이메일 입니다.', 412);
  }

  if (findUserNickname) {
    throw new CustomError('이미 사용중인 닉네임 입니다.', 412);
  }

  if (!email) {
    throw new CustomError('이메일이 입력되지 않았습니다.', 412);
  }

  if (!password) {
    throw new CustomError('비밀번호가 입력되지 않았습니다.', 412);
  }

  if (!passwordConfirm) {
    throw new CustomError('비밀번호 확인이 입력되지 않았습니다.', 412);
  }

  if (!authority) {
    throw new CustomError('권한 정보가 입력되지 않았습니다.', 412);
  }

  if (!name) {
    throw new CustomError('이름이 입력되지 않았습니다.', 412);
  }

  if (!nickname) {
    throw new CustomError('닉네임이 입력되지 않았습니다.', 412);
  }

  if (!phone_num) {
    throw new CustomError('전화번호가 입력되지 않았습니다.', 412);
  }

  if (!adress) {
    throw new CustomError('주소가 입력되지 않았습니다.', 412);
  }

  if (password !== passwordConfirm) {
    throw new CustomError('입력한 비밀번호가 일치하지 않습니다.', 412);
  }

  const hashed_password = await bcrypt.hash(password, 12);

  const singupResult = await signupRepository.signup(
    email,
    hashed_password,
    authority,
    name,
    nickname,
    phone_num,
    adress
  );

  return {
    email: singupResult.user.email,
    password: singupResult.user.password,
    authority: singupResult.user.authority,
    name: singupResult.myInfo.name,
    nickname: singupResult.myInfo.nickname,
    phone_num: singupResult.myInfo.phone_num,
    adress: singupResult.myInfo.adress,
  };
};

module.exports = {
  user_signup,
};
