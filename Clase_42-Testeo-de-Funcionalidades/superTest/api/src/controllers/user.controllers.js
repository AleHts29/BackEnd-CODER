// Faltan funciones para obtener la data que vienen de la DB
const {
  getUserServices,
  getUserByIdServices,
  createUserServices,
} = require("../services/user.services");

// Desarrollo funciones que se cumunican con el router
const getAllUsers = async (req, res) => {
  try {
    let users = await getUserServices();
    res.status(200).json(users);
  } catch (error) {
    console.log("Erro al obtener usuarios ", error);
  }
};

const getUserById = async (req, res) => {
  try {
    let { id } = req.params;

    let users = await getUserByIdServices(id);
    res.json(users);
  } catch (error) {
    console.log("Erro al obtener usuarios ", error);
    res.json({ message: "El usuario no existe" });
  }
};

const createUser = async (req, res) => {
  try {
    let userData = req.body;
    userData.id = Math.random();
    let userSave = await createUserServices(userData);
    res.json({
      message: "User created",
      data: userSave,
    });
  } catch (error) {
    console.log("Erro al obtener usuarios ", error);
  }
};

module.exports = {
  getAllUsers,
  getUserById,
  createUser,
};
