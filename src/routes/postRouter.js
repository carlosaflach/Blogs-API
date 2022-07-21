const express = require('express');
const controllers = require('../controllers');
const { validateTitle,
  validateContent,
  validateCategoryIds, checkIfExists } = require('../middlewares/validateBlogPost');

const postRouter = express.Router();

const auth = require('../middlewares/auth');

postRouter.use(auth);

postRouter.post('/', validateTitle, validateContent, validateCategoryIds, 
controllers.post.createBlogPost);

postRouter.get('/', controllers.post.getPosts);

postRouter.get('/search', controllers.post.findBySearchTerm);
postRouter.get('/:id', controllers.post.getPostById);
postRouter.put('/:id', validateTitle, validateContent, controllers.post.updatePost);
postRouter.delete('/:id', checkIfExists, controllers.post.deletePost);

module.exports = postRouter;