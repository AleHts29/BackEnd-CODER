const express = require("express");

const { Router } = express;

const router = new Router();

router.get("/", (req, res) => {
  res.send("Hola soy el root categorias");
});

router.get("/all", (req, res) => {
  res.send("Todos las categorias");
});

module.exports = router;
