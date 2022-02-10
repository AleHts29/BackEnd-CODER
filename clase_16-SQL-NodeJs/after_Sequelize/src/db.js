const { Sequelize } = require("sequelize");
const userModel = require("./models/user");

// Option 3: Passing parameters separately (other dialects)
const sequelize = new Sequelize("ecommerce_coder", "root", "root", {
  host: "localhost",
  port: "8889",
  dialect: "mysql",
});

// No borra los registros cuando se inicializa la DB
sequelize
  .sync({ force: false })
  .then(() => {
    console.log("Conectado a la base de datos");
  })
  .catch((err) => {
    console.log("Error en la conexion");
  });

const user = userModel(sequelize, Sequelize);

module.exports = user;
