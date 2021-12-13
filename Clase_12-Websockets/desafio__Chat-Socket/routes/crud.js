const express = require("express");
const ClassContainer = require("../src/utils/container.js");

const { Router } = express;
const router = new Router();
const Container = new ClassContainer("./src/data/products.txt");

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

// let auxProduct = [];

router.get("/", (req, res) => {
  //   res.render("form", { data: auxProduct, items: true });
  res.render("form", { items: true });
});

router.post("/", async (req, res) => {
  // se capturan los datos que se ingresan en el formulario --> vista form.ejs
  let newProduct = req.body;
  console.log(newProduct);
  if (newProduct.name == "" || newProduct.price == "") {
    return res.render("form", {
      MSG_ERROR: "No se cargo ningun producto..",
      items: false,
    });
  }
  // se agrega el nuevo elemento al archivo.txt
  await Container.save(newProduct);
  //   auxProduct.push(newProduct);
  //   console.log(auxProduct);

  // se redireciona al patch /newitem
  res.redirect("/newitem");
  //   res.render("form", { data: auxProduct, items: true });
});

module.exports = router;
