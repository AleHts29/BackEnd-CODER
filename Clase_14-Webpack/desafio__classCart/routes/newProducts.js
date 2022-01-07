const express = require("express");
const ClassContainer = require("../src/utils/container.js");

const { Router } = express;
const router = new Router();
const Container = new ClassContainer("./src/data/products.txt");
const ChatData = new ClassContainer("./src/data/chatData.txt");

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

// let auxProduct = [];

router.get("/", (req, res) => {
  //   res.render("form", { data: auxProduct, items: true });
  res.render("newItem");
});

router.post("/", async (req, res) => {
  // se capturan los datos que se ingresan en el formulario --> vista form.ejs enviados desde el componente productComponent.ejs
  let newProduct = req.body;

  // se agrega el nuevo elemento al archivo.txt
  await Container.save(newProduct);

  // se redireciona al patch /newitem
  res.redirect("/newitem");
});

router.post("/chat", async (req, res) => {
  // se capturan los datos que se ingresan en el formulario --> vista form.ejs enviados desde el componente productComponent.ejs
  let chatData = req.body;
  console.log(chatData);

  // se agrega el nuevo elemento al archivo.txt
  // await ChatData.save(chatData);

  // se redireciona al patch /newitem
  res.redirect("/newitem");
});

module.exports = router;
