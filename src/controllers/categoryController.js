const services = require('../services');

const createCategory = async (req, res, next) => {
  try {
    const { name } = req.body;
    const newCategory = await services.category.createCategory(name);
    if (!newCategory) {
      const err = new Error('Category already exists');
      err.statusCode = 400;
      return next(err);
    }

    return res.status(201).json(newCategory);
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

const getCategories = async (req, res, next) => {
  try {
    const allCategories = await services.category.getCategories();

    return res.status(200).json(allCategories);
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

module.exports = {
  createCategory,
  getCategories,
};