const { User, MyInfo, UserImage } = require('../../models');

const UserRepository = require('../repositories/user.repository');
const userRepository = new UserRepository(User, MyInfo, UserImage);

const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const user_signup = (email, password, password_confirm, authority, name, nickname, phone_num, adress) => {
  console.log('password_confirm: ', password_confirm);
  const singupResult = userRepository.signup(email, password, authority, name, nickname, phone_num, adress);

  return singupResult;
};

module.exports = {
  user_signup,
};
