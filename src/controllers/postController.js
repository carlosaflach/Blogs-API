const { sequelize } = require('../database/models');
const services = require('../services');

const createBlogPost = async (req, res, next) => {
  const t = await sequelize.transaction();
  try {
    const { title, content, categoryIds } = req.body;
    const decoded = req.token;
    const serviceResponse = await services.post.createPost(title,
      content, categoryIds, decoded);

    if (!serviceResponse) {
      const err = new Error('"categoryIds" not found');
      err.statusCode = 400;
      return next(err);
    }
    await t.commit();
    return res.status(201).json(serviceResponse);
  } catch (err) {
    console.log(err);
    await t.rollback();
    return next(err);
  }
};

const getPosts = async (req, res, next) => {
  try {
    const getAll = await services.post.getPosts();

    return res.status(200).json(getAll);
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

module.exports = {
  createBlogPost,
  getPosts,
};