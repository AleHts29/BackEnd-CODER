const express = require("express");
const handlebars = require("express-handlebars");

const app = express();
const port = 8085;

// configuraciones
app.set("views", "./views");
app.set("view engine", "hbs");

app.engine(
  "hbs",
  handlebars({
    extname: ".hbs",
    layoutsDir: "views/layouts",
    defaultLayout: "index",
    partialsDir: __dirname + "/views/partials", // Codigo estatico como el footer y header
  })
);

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
  res.render("main", {
    titulo:
      "Hola desde un get en index.js ---> hacia views/main.hbs - pasado como variable",
  });
});

app.get("/products", (req, res) => {
  res.render("products", { layout: "home", data: array });
});

app.listen(port, () => {
  console.log("🚀 Server run on port " + port);
});
