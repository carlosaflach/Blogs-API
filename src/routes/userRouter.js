const express = require('express');
const controllers = require('../controllers');

const userRouter = express.Router();

userRouter.post('/', controllers.user.createUser);

module.exports = userRouter;