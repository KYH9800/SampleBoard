const express = require('express');
const router = express.Router();

const PostController = require('../controllers/post.controller');
const postController = new PostController();

router
  .post('/', postController.addPost) // 게시글 생성
  .get('/:category', postController.getPosts) // 게시글 조회
  .patch('/', postController.updatePosts) // 게시글 수정
  .delete('/', postController.deletePosts); // 게시글 삭제

module.exports = router;
