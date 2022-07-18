const validateDisplayName = (req, res, next) => {
  try {
    const { displayName } = req.body;
    if (displayName.length < 8) {
      const err = new Error('"displayName" length must be at least 8 characters long');
      err.statusCode = 400;
      return next(err);
    }
    return next();
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

const validateEmail = (req, res, next) => {
  try {
    const { email } = req.body;
    const re = /\S+@\S+\.\S+/;
    if (!re.test(email)) {
      const err = new Error('"email" must be a valid email');
      err.statusCode = 400;
      return next(err);
    }
    return next();
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

const validatePassword = (req, res, next) => {
  try {
    const { password } = req.body;
    if (password.length < 6) {
      const err = new Error('"password" length must be at least 6 characters long');
      err.statusCode = 400;
      return next(err);
    }
    return next();
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

module.exports = {
  validateDisplayName,
  validateEmail,
  validatePassword,
};