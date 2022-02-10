exports.up = function (knex) {
  knex.schema
    .createTable("user", (table) => {
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
};

exports.down = function (knex) {};
