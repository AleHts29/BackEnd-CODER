const ProductsApi = require("./src/services/products.service");
const MymongoClient = require("./src/models/db/mongoClient");

let client = new MymongoClient();
client.conected();

// Instancio los servicios
let productApi = new ProductsApi();

const ejecucion = async () => {
  try {
    //   cmd --> parametro por terminal por ejemplo
    switch (cdm) {
      case "buscar":
        console.log(await productApi.buscar());
        break;
      case "agregar":
        console.log(await productApi.agregar());
        break;
      case "borrar":
        console.log(await productApi.borrar());
        break;
    }
  } catch (error) {
    console.log(error);
  }
};
