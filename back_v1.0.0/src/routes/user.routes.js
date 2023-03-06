const express = require('express');
const router = express.Router();

const UserController = require('../controllers/user.controller');
const userController = new UserController();

router.post('/signup', userController.signup);

router.get('/login', () => {
  // todo
});

module.exports = router;
