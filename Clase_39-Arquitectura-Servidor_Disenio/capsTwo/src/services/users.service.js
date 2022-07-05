const { User } = require("../models/userData");

// Los dejamos vacios inicialmente porque primero necesito configurar squelize, las tablas y modelos de mi DB
const obtnerDatos = async () => {
  let users = await User.findAll();
  return users;
};

const createData = async (data) => {
  // Toda esta logica deberia estar en /models --> como DAOs
  let { username, password } = data;
  let user = await User.findOne({
    where: {
      username: username,
    },
  });

  if (!user) {
    let userNew = await User.create({
      username,
      password,
    });
    return userNew;
  }

  return "El usuario ya existe";
};

module.exports = {
  obtnerDatos,
  createData,
};
