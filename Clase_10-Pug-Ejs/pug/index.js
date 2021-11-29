const express = require("express");

const app = express();
const port = 8082;

// seteo el motro de plantillas
app.set("view engine", "pug");
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
  res.render("index");
});

app.get("/products", (req, res) => {
  res.render("products", { data: array });
});

app.listen(port, () => {
  console.log(`💊 Server run on poort ${port}`);
});
