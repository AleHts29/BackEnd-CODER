const express = require("express");
let arr = require("./data/index");

const app = express();
const port = 8083;

// seteo el motro de plantillas
app.set("view engine", "ejs");
app.set("views", "./views");

// midleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

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

app.get("/form", (req, res) => {
  res.render("form");
});

app.get("/products", (req, res) => {
  res.render("products", { data: arr, items: true });
});

app.post("/form", (req, res) => {
  console.log(arr.length);
  const obj = {
    id: arr.length + 1,
    name: req.body.name,
    price: req.body.price,
  };
  arr.push(obj);
  console.log(arr);
  res.redirect("/products");
});

app.listen(port, () => {
  console.log(`😎 Server run on poort ${port}`);
});
