const { Category } = require('../database/models');

const createCategory = async (name) => {
  const categoryExists = await Category.findOne({ where: { name } });
  if (categoryExists) return false;

  const newCategory = await Category.create({ name });

  return newCategory;
};

module.exports = {
  createCategory,
};
