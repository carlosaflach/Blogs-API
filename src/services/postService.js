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

const getPosts = async () => {
  const getAllPosts = await BlogPost.findAll({
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } }, 
      { model: Category, as: 'categories', through: { attributes: [] } }],
      
  });

  return getAllPosts;
};

const getPostById = async (id) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } }, 
      { model: Category, as: 'categories', through: { attributes: [] } }],
  });

  if (!post) return false;

  return post;
};

const updatePost = async (id, title, content, decoded) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
    ],
  });
  // console.log('POST', post.user.email); 
  // console.log('Decoded', decoded.email);
  if (post.user.email !== decoded.email) return false;

  await BlogPost.update(
    { title, content },
    { where: { id } },
  );
  
  const updatedPost = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } }, 
      { model: Category, as: 'categories', through: { attributes: [] } }],
  });

  return updatedPost;
};

const deletePost = async (id, decoded) => {
  const post = await BlogPost.findByPk(id, {
    include: [
      { model: User, as: 'user', attributes: { exclude: ['password'] } },
    ],
  });

  if (post.user.email !== decoded.email) return false;

  const deletedPost = await BlogPost.destroy({
    where: { id },
  });

  console.log(deletedPost);

  return true;
};

module.exports = {
  createPost,
  getPosts,
  getPostById,
  updatePost,
  deletePost,
};