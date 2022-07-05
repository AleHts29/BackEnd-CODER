const ProductDao = require("../daos/products.daos");

class RepositoryClass {
  constructor() {
    this.productDao = new ProductDao();
  }
  async getAllRepository() {
    let products = await this.productDao.getAll();
    return products;
  }
}

module.exports = RepositoryClass;

// Para manejar una capa de seguridad por ejemplo con datos sensibles
