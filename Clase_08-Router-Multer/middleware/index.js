const express = require("express");

const app = express();
const { Router } = express;
const router = new Router();

//Middleware a nivel de aplicación

// app.use(function (req, res, next) {
//   console.log("Time:", Date.now());
//   next();
// });

//Middleware a nivel de ruta

// function middlewareOne(req, res, next) {
//   req.cambioReq = "dato aportado a mi req";
//   next()
// }

// app.get("/", middlewareOne, (req, res) => {
//     let varOne = req.cambioReq;
//     res.send(varOne);
//   });

//   app.get("/home", (req, res) => {
//     res.send("Hola mundo HOME");
//   });

//Middleware a nivel de Route
router.use(function (req, res, next) {
  console.log("Time:", Date.now());
  next();
});

app.use("/", router);
router.get("/getcategories", (req, res) => {
  res.send("Todas las Categorias");
});

router.get("/", (req, res) => {
  res.send("Hola Mundo");
});

router.get("/home", (req, res) => {
  res.send("Hola mundo HOME");
});

app.listen(8080, () => {
  console.log("Server run on port 8080");
});
