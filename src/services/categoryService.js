const { Category } = require('../database/models');

const createCategory = async (name) => {
  const categoryExists = await Category.findOne({ where: { name } });
  if (categoryExists) return false;

  const newCategory = await Category.create({ name });

  return newCategory;
};

const getCategories = async () => {
  const allCategories = await Category.findAll();

  return allCategories;
};

module.exports = {
  createCategory,
  getCategories,
};
