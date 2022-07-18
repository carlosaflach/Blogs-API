const { User } = require('../database/models');
const { jwtSign } = require('../helpers/jwt');

const createUser = async (displayName, email, password, image) => {
  const userExistis = await User.findOne({ where: { email } });

  if (userExistis) return false;

  await User.create({ displayName, email, password, image });

  const token = jwtSign({ displayName, email });

  return { token };
};

const getAllUsers = async () => {
  const users = User.findAll({
    attributes: { exclude: ['password'] },
  });

  return users;
};

module.exports = { createUser,
getAllUsers };