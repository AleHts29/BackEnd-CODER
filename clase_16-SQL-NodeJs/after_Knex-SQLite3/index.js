const express = require("express");
const app = express();
const knex = require("./knexfile");

app.use(express.json());

// LEER Todos
app.get("/all", (req, res) => {
  knex
    .from("user")
    // .order("id", "desc")
    .then((json) => {
      console.log(res);
      res.send({ data: json });
    });
});

// LEER con filtro
app.get("/filtro", (req, res) => {
  knex
    .from("user")
    .select("name", "email")
    .then((json) => {
      console.log(res);
      res.send({ data: json });
    });
});

// CREAR - subir data a la DB
app.post("/", (req, res) => {
  let data = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  knex("user")
    .insert(data)
    .then(() => {
      res.send("Registro Ok!..");
    })
    .catch((err) => {
      res.send("Error al guardar..");
    });
});

// OBTENER usuario por ID
app.get("/:id", (req, res) => {
  knex
    .from("user")
    .where({ id: req.params.id })
    .then((json) => {
      res.send({ data: json });
    })
    .catch((err) => {
      res.send("Error al buscar ID");
    });
});

// ACTUALIZAR
app.put("/update/:id", (req, res) => {
  let data = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  knex("user")
    .where({ id: req.params.id })
    .update(data)
    .then((json) => {
      res.send({ data: "Registro actualizado" });
    })
    .catch((err) => {
      res.send("Error al actualizar ID");
    });
});

// DELETE
app.delete("/delete/:id", (req, res) => {
  knex("user")
    .where({ id: req.params.id })
    .del()
    .then((json) => {
      res.send({ data: "Registro Eliminado" });
    })
    .catch((err) => {
      res.send("Error al eliminar ID");
    });
});

app.listen(8080, () => {
  console.log("Server ok!..");
});
