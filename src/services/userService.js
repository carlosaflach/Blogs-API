const { User } = require('../database/models');
const { jwtSign } = require('../helpers/jwt');

const createUser = async (displayName, email, password, image) => {
  const userExistis = await User.findOne({ where: { email } });

  if (userExistis) return false;

  await User.create({ displayName, email, password, image });

  const token = jwtSign({ displayName, email });

  return { token };
};

const findAll = async () => {
  const users = User.findAll({
    attributes: { exclude: ['password'] },
  });

  return users;
};

const findById = async (id) => {
  const user = await User.findByPk(id, {
    attributes: { exclude: ['password'] },
  });

  if (!user) return false;

  return user;
};

const deleteUser = async (token) => {
  const userExistis = await User.findOne({ where: { email: token.email } });
  if (!userExistis) return false;

  await User.destroy({
    where: { email: token.email },
  });

  return true;
};

module.exports = { 
  createUser,
  findAll,
  findById,
  deleteUser,
};