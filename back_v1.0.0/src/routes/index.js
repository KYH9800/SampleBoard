const express = require('express');
const router = express.Router();

const postRouter = require('./post.routes');
router.use('/post', postRouter);

const userRouter = require('./user.routes');
router.use('/user', userRouter);

module.exports = router;
