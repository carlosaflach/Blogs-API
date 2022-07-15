const services = require('../services');

const login = async (req, res, next) => {
  try {
    const { email, password } = req.body;

    const serviceResponse = await services.login(email, password);
    if (!serviceResponse) {
      const err = new Error('Invalid fields');
      err.statusCode = 400;
      return next(err);
    }

    return res.status(200).json(serviceResponse);
  } catch (err) {
    console.log(err);
    next(err);
  }
};

module.exports = login;