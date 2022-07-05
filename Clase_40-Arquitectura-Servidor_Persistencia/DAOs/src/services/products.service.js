const ProductDao = require("../models/daos/products.daos");

class ProductsApi {
  constructor() {
    this.productDao = new ProductDao();
  }

  //   Metodos
  async agregar(product) {
    let prodNew = await this.productDao.add(product);
    return prodNew;
  }

  async buscar(id) {
    let products;

    if (id) {
      products = await this.productDao.getById(id);
    } else {
      products = await this.productDao.getAll();
    }
    return products;
  }

  async borrar(id) {
    let products;
    if (id) {
      products = await this.productDao.deleteById(id);
    } else {
      products = await this.productDao.deleteAll();
    }
    return products;
  }
}

module.exports = ProductsApi;
