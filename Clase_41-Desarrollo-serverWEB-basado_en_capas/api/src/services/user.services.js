const { userDao } = require("../models/dao/index.js");

// Aqui van los metodos que se van a comunicar con el DAOs

const getUserServices = async () => {
  return await userDao.listall();
};

const getUserByIdServices = async (id) => {
  return await userDao.listar(id);
};

const createUserServices = async (data) => {
  return await userDao.guardar(data);
};

module.exports = {
  getUserServices,
  getUserByIdServices,
  createUserServices,
};
