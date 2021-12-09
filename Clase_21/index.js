const express = require("express");
const app = express();

const port = 8088;

const faker = require("faker");

let randomUser = [];

// FUNCIONES //
const createMoks = (cant = 2) => {
  for (let i = 1; i <= cant; i++) {
    randomUser.push({
      name: faker.name.findName(),
      email: faker.internet.email(),
      website: faker.internet.url(),
      imagen: faker.image.avatar(),
    });
  }
};

// RUTAS
app.get("/", (req, res) => {
  // responda con un arrayt de 10 obj
  // que devuielva las propiedades.. nombre, apellido, color
  // ramdon de propiedades, tomados de la base de datos
});

app.get("/all", (req, res) => {
  res.send({ data: randomUser });
});

app.post("/api/usuarios/popular", (req, res) => {
  createMoks(req.query.cant);
  res.send("Data ok");
});

app.listen(port, () => {
  console.log("Server OK");
});
