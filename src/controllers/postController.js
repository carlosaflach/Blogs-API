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

const getPostById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const post = await services.post.getPostById(Number(id));

    if (!post) {
      const err = new Error('Post does not exist');
      err.statusCode = 404;
      return next(err);
    }

    return res.status(200).json(post);
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

const updatePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const decoded = req.token;
    const { title, content } = req.body;

    const updatedPost = await services.post.updatePost(id, title, content, decoded);

    if (!updatedPost) {
      const err = new Error('Unauthorized user');
      err.statusCode = 401;
      return next(err);
    }

    return res.status(200).json(updatedPost);
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

const deletePost = async (req, res, next) => {
  try {
    const { id } = req.params;
    const decoded = req.token;
    const isDeleted = await services.post.deletePost(id, decoded);
    if (!isDeleted) {
      const err = new Error('Unauthorized user');
      err.statusCode = 401;
      return next(err);
    }

    return res.status(204).end();
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

const findBySearchTerm = async (req, res, next) => {
  try {
    const { q } = req.query;
    console.log(q);
    const posts = await services.post.findBySearchTerm(q);
    
    return res.status(200).json(posts);
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

module.exports = {
  createBlogPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
  findBySearchTerm,
};