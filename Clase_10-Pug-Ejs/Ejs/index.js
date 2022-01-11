const express = require("express");
const methodOverride = require("method-override");

const app = express();
const port = 8083;

// midleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));
app.use(methodOverride("_method", { methods: ["POST", "GET"] }));

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

app.get("/update", (req, res) => {
  res.render("update", { data: array, items: true });
});

app.get("/update/:id", (req, res) => {
  let idProduct = req.params.id;
  let product = array.find((item) => item.id == idProduct);
  // res.render("update", { data: product });
  console.log(product);

  // product = "undefine";
  if (!product) {
    return res.render("update", {
      MSG_NOT_FOUNT: "ID not found..",
      items: false,
    });
  }
  // Como la busqueda devuelve un objeto, se lo encapsula en un array para no generar conficto con el fetch en products.ejs
  // Se muestra renderizado el producto buscado
  // res.render("update", { data: [product], items: true });

  res.render("update", { data: [product], items: true });
});

// app.get("/products/:id", (req, res) => {
//   let { id } = req.params;
//   let product = array.find((item) => item.id == id);
//   res.send({ data: product });
// });

// Puente
app.post("/update", (req, res) => {
  let id = req.body.id;
  res.redirect("/update/" + id);
});

app.put("/update/:id", (req, res) => {
  console.log("Hola soy un PUT");
  console.log(req.params.id); // me indica el id que es pasdado por queryParams
  let { newName, newPrice } = req.body;

  // Busqueda item a actualizar
  let { id } = req.params;
  let product = array.find((item) => item.id == id);

  // Actualiza item
  product.name = newName;
  product.price = newPrice;

  res.redirect("/products");
});

app.all("*", (req, res) => {
  res.status(404).send("Error: not found page");
});

app.listen(port, () => {
  console.log(`💊 Server run on poort ${port}`);
});
