const express = require("express");
const ClassContainer = require("../src/utils/container.js");

const { Router } = express;
const router = new Router();
const Container = new ClassContainer("./src/data/products.txt");

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

router.get("/", async (req, res) => {
  let dataFIle = await Container.getAll();
  if (Object.keys(dataFIle).length === 0) {
    return res.send({ MSG: "El archivo se encuentra vacio.." });
  }
  //   res.json(dataFIle);
  res.render("products", { data: dataFIle, items: true });
});

router.get("/:id", async (req, res) => {
  //   res.sendFile(__dirname + "/public/form.html");
  let { id } = req.params;
  let dataFIle = await Container.getById(id);
  if (dataFIle == "NULL") {
    return res.send({ MSG: "No se encuentra el id.." });
  }
  res.json(dataFIle);
});

router.post("/", async (req, res) => {
  let newProduct = req.body;
  if (newProduct.name == "" || newProduct.price == "") {
    return res.send({ Error: "No se cargo ningun producto.." });
  }
  await Container.save(newProduct);
  //   res.send("Producto agredado de forma exitosa!..");
  res.redirect("/api/products");
});

router.put("/:id", async (req, res) => {
  let { id } = req.params;

  let dataFIle = await Container.getById(id);

  if (dataFIle == "NULL") {
    return res.send({ MSG: "No se encuentra el id.." });
  }
  let newData = req.body;
  let upDateItem = await Container.updateById(id, newData);
  res.send(upDateItem);
});

router.delete("/:id", async (req, res) => {
  let { id } = req.params;
  let dataFIle = await Container.getById(id);

  if (dataFIle == "NULL") {
    return res.send({ MSG: "No se encuentra el id.." });
  }
  let returnData = await Container.deleteById(id);
  res.send(returnData);
});

module.exports = router;

// app.get("/", (req, res) => {
//   res.render("index", {
//     texto: "Variable desde get en index.js",
//     admin: true,
//   });
// });

// app.get("/form", (req, res) => {
//   res.render("form");
// });

// app.get("/products", (req, res) => {
//   res.render("products", { data: arr, items: true });
// });

// app.post("/form", (req, res) => {
//   console.log(arr.length);
//   const obj = {
//     id: arr.length + 1,
//     name: req.body.name,
//     price: req.body.price,
//   };
//   arr.push(obj);
//   console.log(arr);
//   res.redirect("/products");
// });
