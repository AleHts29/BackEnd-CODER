const { Sequelize } = require("sequelize");

// CREATE DATABASE clase_39
const db = new Sequelize("clase_39", "root", "root", {
  host: "localhost",
  port: "8889",
  dialect: "mysql",
});

module.exports = {
  db,
};
