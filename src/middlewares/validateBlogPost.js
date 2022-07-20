const validateTitle = (req, res, next) => {
  try {
    const { title } = req.body;
    if (!title) {
      const err = new Error('Some required fields are missing');
      err.statusCode = 400;
      return next(err);
    }
    return next();
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

const validateContent = (req, res, next) => {
  try {
    const { content } = req.body;
    if (!content) {
      const err = new Error('Some required fields are missing');
      err.statusCode = 400;
      return next(err);
    }
    return next();
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

const validateCategoryIds = (req, res, next) => {
  try {
    const { categoryIds } = req.body;
    if (!categoryIds) {
      const err = new Error('Some required fields are missing');
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
  validateTitle,
  validateContent,
  validateCategoryIds,
};