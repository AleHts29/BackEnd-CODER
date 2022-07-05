const mongosee = require("mongoose");
const Config = require("../config/config");

// Creo configuraciones de coneccion mediante una Clase
class MymongoClient {
  constructor() {
    (this.conected = false), (this.client = mongosee);
  }

  async connect() {
    try {
      await this.client.connect(Config.host + Config.name);
      console.log("Base de datos conectada!");
    } catch (error) {
      throw "Error al conectar DB";
    }
  }

  async disconnect() {
    try {
      await this.client.close();
      console.log("Base de datos desconectada!");
    } catch (error) {
      throw "Error al desconectar DB";
    }
  }
}

module.exports = MymongoClient;
