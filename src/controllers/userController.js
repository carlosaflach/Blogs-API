const services = require('../services');

const createUser = async (req, res, next) => {
  try {
    const { displayName, email, password, image } = req.body;
    const serviceReponse = await services.user.createUser(displayName, email, password, image);
    if (!serviceReponse) {
      const err = new Error('User already registered');
      err.statusCode = 409;
      return next(err);
    }

    return res.status(201).json(serviceReponse);
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

const getAllUsers = async (req, res, next) => {
  try {
    const users = await services.user.getAllUsers();
    return res.status(200).json(users);
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

module.exports = {
  createUser,
  getAllUsers,
};