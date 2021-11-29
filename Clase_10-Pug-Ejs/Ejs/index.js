const express = require("express");

const app = express();
const port = 8081;

// seteo el motro de plantillas
app.set("view engine", "ejs");
app.set("views", "./views");

const array = [
  {
    name: "Teclado Midi - Arturia Micro Freak",
    price: 250,
    id: 1,
  },
  {
    name: "Auriculares AKG240",
    price: 210,
    id: 2,
  },
  {
    name: "Monitores KRK",
    price: 457,
    id: 3,
  },
];

app.get("/", (req, res) => {
  res.render("index", {
    texto: "Variable desde get en index.js",
    admin: true,
  });
});

app.get("/products", (req, res) => {
  res.render("products", { data: array });
});

app.listen(port, () => {
  console.log(`💊 Server run on poort ${port}`);
});
