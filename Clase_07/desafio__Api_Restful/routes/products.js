const express = require("express");
const Container = require("../src/utils/container");

const { Router } = express;
const router = new Router();

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

// middleware
router.use(function (req, res, next) {
  Container.getAll();
  next();
});

// Static files
// esto no se usa
router.use("/static", express.static(__dirname + "/public")); //  __dirname --> ruta absoluta

router.get("/", async (req, res) => {
  //   Container.getAll();
  //   console.log(Container.getAll());
  //   res.sendFile(__dirname + "/public/index.html");
  res.send("devuelve todos los productos..");
});

router.get("/:id", (req, res) => {
  //   res.sendFile(__dirname + "/public/form.html");
  let { id } = req.params;
  res.send("devuelve un producto segun su id.. " + id);
});

router.post("/", (req, res) => {
  res.send("recibe y agrega un producto..");
});

router.put("/:id", (req, res) => {
  res.send("recibe y actualiza un producto segun su id.. " + req.params.id);
});

router.delete("/:id", (req, res) => {
  res.send("elimina un producto segun su id.. " + req.params.id);
});

module.exports = router;
