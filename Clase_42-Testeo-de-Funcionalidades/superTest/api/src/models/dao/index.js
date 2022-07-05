// se van a importar los containers y los van a exportar
const MemoryDao = require("./users/momory.dao");
const MongoDao = require("./users/mongo.dao");

let persistencia = "memory";
let userDao;

switch (persistencia) {
  case "mongodb":
    userDao = new MongoDao();
    break;

  case "memory":
    userDao = new MemoryDao();
    break;
}

module.exports = { userDao };
