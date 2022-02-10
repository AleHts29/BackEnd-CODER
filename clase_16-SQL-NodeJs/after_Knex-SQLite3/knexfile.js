// Update with your config settings.

const knex = require("knex");

const config = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/ecomerce_coder.db3",
    },
  },
  useNullAsDefault: true,
  pool: { min: 2, max: 8 },
};

const db = knex(config.development);

module.exports = db;
