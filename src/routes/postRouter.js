const express = require('express');
const controllers = require('../controllers');
const { validateTitle,
  validateContent,
  validateCategoryIds } = require('../middlewares/validateBlogPost');

const postRouter = express.Router();

const auth = require('../middlewares/auth');

postRouter.use(auth);

postRouter.post('/', validateTitle, validateContent, validateCategoryIds, 
controllers.post.createBlogPost);

postRouter.get('/', controllers.post.getPosts);

module.exports = postRouter;