const checkLogin = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
        const err = new Error('Some required fields are missing');
        err.statusCode = 400;
        return next(err);
    }
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

module.exports = checkLogin;