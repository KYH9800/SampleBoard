const express = require('express');
const router = express.Router();

const SignupController = require('../controllers/signup.controller');
const signupController = new SignupController();

const LoginController = require('../controllers/login.controller');
const loginController = new LoginController();

const { isNotLoggedIn } = require('../../middlewares/isNotLoggedIn'); // 로그인되지 않은 사용자만 접근이 가능합니다.
const { isLoggedInForLogout } = require('../../middlewares/isLoggedIn'); // 로그인된 사용자만 접근이 가능합니다.

// 회원가입
router.post('/signup', isNotLoggedIn, signupController.signup);

// 로그인
router.post('/login', isNotLoggedIn, loginController.login);
router.post('/logout', isLoggedInForLogout, loginController.logout);

module.exports = router;
