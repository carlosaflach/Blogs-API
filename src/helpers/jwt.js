const jwt = require('jsonwebtoken');

const secret = process.env.JWT_SECRET;

const jwtConfig = {
  expiresIn: '1d',
  algorithm: 'HS256',
};

const jwtSign = (payload) => jwt.sign(payload, secret, jwtConfig);

module.exports = jwtSign;