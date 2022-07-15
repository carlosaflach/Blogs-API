const { User } = require('../database/models');

const jwt = require('../helpers/jwt');

const login = async (email, password) => {
  const user = await User.findOne({ where: { email } });

  if (!user || user.password !== password) return false;

  const token = jwt({ email });

  return { token };
};

module.exports = login;