const express = require('express');
const controllers = require('../controllers');
const { validateDisplayName,
  validateEmail,
  validatePassword } = require('../middlewares/validateUser');
const auth = require('../middlewares/auth');

const userRouter = express.Router();

userRouter.post('/', validateDisplayName,
  validateEmail,
  validatePassword, 
  controllers.user.createUser);

userRouter.use(auth);

userRouter.get('/', controllers.user.getAllUsers);

module.exports = userRouter;