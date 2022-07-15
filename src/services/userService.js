const { User } = require('../database/models');
const jwt = require('../helpers/jwt');

const createUser = async (displayName, email, password, image) => {
  const userExistis = await User.findOne({ where: { email } });

  if (userExistis) return false;

  await User.create({ displayName, email, password, image });

  const token = jwt({ displayName, email });

  return { token };
};

module.exports = { createUser };