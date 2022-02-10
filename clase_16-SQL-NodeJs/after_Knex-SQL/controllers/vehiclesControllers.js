const services = require("../services/vehiclesServices");

const list = async (req, res) => {
  try {
    const listAll = await services.listCarts();
    res.json(listAll);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const single = async (req, res) => {
  try {
    const listSingle = await services.listCarts({ id: req.params.id });
    res.json(listSingle);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const createItem = async (req, res) => {
  try {
    const vehicles = ({ marca, nombre, modelo } = req.body);
    await services.createCart(vehicles);
    res.status(200).send("Item creado con exito!..");
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const updateItem = async (req, res) => {
  try {
    const vehicles = ({ marca, nombre, modelo } = req.body);
    const { id } = req.params;
    await services.updateCart(id, vehicles);
    res.send(`Item con ID ${id} actualizados`);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

const deleteItem = async (req, res) => {
  try {
    const { id } = req.params;
    await services.deleteCart(id);
    res.send(`Item con ID ${id} eliminado`);
  } catch (error) {
    res.status(400).json(error.message);
  }
};

module.exports = {
  list,
  single,
  createItem,
  updateItem,
  deleteItem,
};
