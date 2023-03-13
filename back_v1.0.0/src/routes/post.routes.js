const express = require('express');
const router = express.Router();

const PostController = require('../controllers/post.controller');
const postController = new PostController();

const { isLoggedIn } = require('../../middlewares/isLoggedIn');

const fs = require('fs');
const { upload, awsUpload } = require('../../middlewares/multer');

try {
  fs.accessSync('uploads');
} catch (error) {
  console.log('uploads 폴더가 없으므로 생성합니다.');
  fs.mkdirSync('uploads');
}

router
  .post('/', awsUpload.none(), postController.addPost) // 게시글 생성
  .post('/image', awsUpload.array('image'), postController.uploadImage) // 이미지 저장
  .get('/:category', isLoggedIn, postController.getPosts) // 게시글 조회
  .patch('/', postController.updatePosts) // 게시글 수정
  .delete('/', postController.deletePosts); // 게시글 삭제

module.exports = router;
