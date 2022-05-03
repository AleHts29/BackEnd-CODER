require("./db");

const Users = require("./models/users");

const users = [
  {
    nombre: "Pedro",
    apellido: "Mei",
    dni: "31155898",
  },
];

// READ
const getAllUsers = async () => {
  const users = await Users.find();
  return users;
};
getAllUsers()
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });

// SAVE
const userSave = async (users) => {
  let newUser;
  await users.map((user) => {
    let addUser = new Users({
      nombre: user.nombre,
      apellido: user.apellido,
      dni: user.dni,
    });

    newUser = addUser.save();
  });
  return newUser;
};
userSave(users)
  .then((res) => {
    console.log(res);
  })
  .catch((err) => {
    console.log(err);
  });
