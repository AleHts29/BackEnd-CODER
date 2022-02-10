const db = require("../db");
const dotenv = require("dotenv");
dotenv.config();

const listCarts = (id = {}) => {
  return db(process.env.T_NAME)
    .where(id)
    .select("id", "nombre", "marca", "modelo");
};

const createCart = (obj) => {
  return db(process.env.T_NAME).insert(obj);
};

const updateCart = (id, obj) => {
  return db(process.env.T_NAME).where("id", id).update(obj);
};

const deleteCart = (id) => {
  return db(process.env.T_NAME).where("id", id).del();
};

module.exports = {
  listCarts,
  createCart,
  updateCart,
  deleteCart,
};
