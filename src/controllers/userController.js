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

const findAllUsers = async (req, res, next) => {
  try {
    const users = await services.user.findAll();
    return res.status(200).json(users);
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

const findById = async (req, res, next) => {
  try {
    const { id } = req.params;
    const user = await services.user.findById(id);
    if (!user) {
      const err = new Error('User does not exist');
      err.statusCode = 404;
      return next(err);
    }

    return res.status(200).json(user);
  } catch (err) {
    console.log(err);
    return next(err);
  }
};

module.exports = {
  createUser,
  findAllUsers,
  findById,
};