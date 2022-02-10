const dotenv = require("dotenv");
dotenv.config();

const knex = require("knex")({
  client: "mysql",
  connection: {
    host: process.env.DB_HOST,
    port: process.env.DB_PORT,
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
  },
  pool: { min: 2, max: 8 }, // son lo hilos de conexion (conexiones al tiempo)
});

knex.schema
  .createTableIfNotExists(process.env.T_NAME, (table) => {
    table.increments("id").primary(),
      table.string("nombre"),
      table.string("marca"),
      table.string("modelo");
  })
  .then((res) => {
    console.log("Tabla creada!..");
  })
  .catch((err) => {
    console.log(err);
  });

module.exports = knex;
