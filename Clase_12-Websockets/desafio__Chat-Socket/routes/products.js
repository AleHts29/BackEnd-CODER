const express = require("express");
const ClassContainer = require("../src/utils/container.js");

const { Router } = express;
const router = new Router();
const Container = new ClassContainer("./src/data/products.txt");

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

// Muestra todos los productos actualizados
router.get("/", async (req, res) => {
  let dataFIle = await Container.getAll();
  if (Object.keys(dataFIle).length === 0) {
    return res.send({ MSG: "El archivo se encuentra vacio..", items: false });
  }
  //   se renderiza la vista products_ejs.ejs con los datos que se obtuvieron del archivo.txt
  // res.json(dataFIle);
  res.render("products", { data: dataFIle, items: true });
});

// http://localhost:8090/api/products/6 --> Por medio de un id devuelve el producto.
router.get("/:id", async (req, res) => {
  //   res.sendFile(__dirname + "/public/form.html");
  let { id } = req.params;
  let dataFIle = await Container.getById(id);
  if (dataFIle == "NULL") {
    return res.render("products", {
      MSG_NOT_FOUNT: "ID not found..",
      items: false,
    });
  }
  // Como la busqueda devuelve un objeto, se lo encapsula en un array para no generar conficto con el fetch en products.ejs
  // Se muestra renderizado el producto buscado
  res.render("products", { data: [dataFIle], items: true });
});

// router.post("/", async (req, res) => {
//   // se capturan los datos que se ingresan en el formulario --> vista form.ejs
//   let newProduct = req.body;
//   if (newProduct.name == "" || newProduct.price == "") {
//     return res.send({ Error: "No se cargo ningun producto.." });
//   }
//   // se agrega el nuevo elemento al archivo.txt
//   await Container.save(newProduct);

//   // se redireciona al patch /api/products
//   res.redirect("/api/products");
//   // res.render("products", { data: [newProduct], items: true });
// });

// puente para pase de parametro y realizar una busqueda por id ---> viene de buscador.ejs
router.post("/", async (req, res) => {
  // se capturan el id de la --> vista form.ejs
  let id = req.body.id;
  // se redireciona al patch /api/products/id
  res.redirect("/api/products/" + id);
});

// **FALTA**
// desarrollar Componente - vista de renderizado
// se debe poder buscar un item y modificarlo
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

// **FALTA**
// desarrollar Componente - vista de renderizado
// se debe poder buscar un item y eliminarlo
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
