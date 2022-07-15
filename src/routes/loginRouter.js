const express = require('express');
const controllers = require('../controllers');
const checkLoginBody = require('../middlewares/validateLogin');

const loginRouter = express.Router();

loginRouter.post('/', checkLoginBody, controllers.login);

module.exports = loginRouter;