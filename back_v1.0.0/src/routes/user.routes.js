const express = require('express');
const router = express.Router();

const SignupController = require('../controllers/signup.controller');
const signupController = new SignupController();

const LoginController = require('../controllers/login.controller');
const loginController = new LoginController();

// 회원가입
router.post('/signup', signupController.signup);

// 로그인
router.post('/login', loginController.login);

module.exports = router;
