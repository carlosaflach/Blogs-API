const validateCategoryName = async (req, res, next) => {
  try {
    const { name } = req.body;
    if (!name) {
      const err = new Error('"name" is required');
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
  validateCategoryName,
};