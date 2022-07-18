const express = require('express');
const controllers = require('../controllers');
const { validateDisplayName,
  validateEmail,
  validatePassword } = require('../middlewares/validateUser');

const userRouter = express.Router();

userRouter.post('/', validateDisplayName,
  validateEmail,
  validatePassword, 
  controllers.user.createUser);

module.exports = userRouter;