const express = require('express');
const router = express.Router();

// 회원가입, 로그인, 내 정보 조회
const userRouter = require('./user.routes');
router.use('/user', userRouter);

// 게시글
const postRouter = require('./post.routes');
router.use('/post', postRouter);

module.exports = router;
