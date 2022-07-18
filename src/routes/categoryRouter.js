const express = require('express');
const controllers = require('../controllers');
const { validateCategoryName } = require('../middlewares/validateCategory');
const auth = require('../middlewares/auth');

const categoryRouter = express.Router();

categoryRouter.use(auth);
categoryRouter.post('/', validateCategoryName, controllers.category.createCategory);

module.exports = categoryRouter;