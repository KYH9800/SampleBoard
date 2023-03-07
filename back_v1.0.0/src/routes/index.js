const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send('sample-board-api');
});

// 회원가입, 로그인
const userRouter = require('./user.routes');
router.use('/user', userRouter);

// 게시글
const postRouter = require('./post.routes');
router.use('/post', postRouter);

module.exports = router;
