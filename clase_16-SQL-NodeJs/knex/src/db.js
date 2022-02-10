const knex = require("knex")({
  client: "mysql",
  connection: {
    host: "localhost", // o locallhost
    port: "8889",
    user: "root",
    password: "root",
    database: "ecommerce",
  },
  pool: { min: 2, max: 8 }, // son lo hilos de conexion (conexiones al tiempo)
});

knex.schema
  .createTableIfNotExists("user", (table) => {
    table.increments("id").primary(),
      table.string("name"),
      table.string("email", 128),
      table.string("role").defaultTo("admin"),
      table.string("password");
  })
  .then((res) => {
    console.log("Tabla creada!..");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = knex;
