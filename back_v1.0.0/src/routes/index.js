const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.status(200).send('sample-board-api');
});

// 게시글
const postRouter = require('./post.routes');
router.use('/post', postRouter);

// 사용자
const userRouter = require('./user.routes');
router.use('/user', userRouter);

module.exports = router;
