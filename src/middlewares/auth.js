const { jwtVerify } = require('../helpers/jwt');

module.exports = (req, res, next) => {
  const token = req.headers.authorization;
  if (!token) {
    const err = new Error('Token not found');
    err.statusCode = 401;
    return next(err);
  }

  try {
    const decoded = jwtVerify(token);
    req.token = decoded;
    return next();
  } catch (err) {
    err.message = 'Expired or invalid token';
    err.statusCode = 401;
    return next(err);
  }
};