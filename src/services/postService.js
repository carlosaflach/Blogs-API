const { BlogPost, User, Category, PostCategory } = require('../database/models');

const checkCategoryIds = async (categoryIds) => {
  const getAllCategories = await Category.findAll();

  let categoryExists = true;

  await categoryIds.forEach((categoryId) => {
    const exists = getAllCategories.some(({ dataValues }) => categoryId === dataValues.id);
    if (!exists) categoryExists = false;
  });
  if (!categoryExists) return false;
  return true;
};

const createPost = async (title, content, categoryIds, decoded) => {
  const { email } = decoded;

  const user = await User.findOne({ where: { email } });

  const createNewPost = await BlogPost.create({ userId: user.id, title, content });
  console.log('SERVICE', createNewPost);

  const checkCategoryId = await checkCategoryIds(categoryIds);
  
  if (!checkCategoryId) return false;

  await categoryIds.forEach(async (category) => {
    await PostCategory.create({ postId: createNewPost.id, categoryId: category });
  });

  return {
    id: createNewPost.id,
    title: createNewPost.title,
    content: createNewPost.content,
    userId: createNewPost.userId,
    updated: createNewPost.updated,
    published: createNewPost.published,
  };
};

module.exports = {
  createPost,
};