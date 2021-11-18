const express = require("express");

const { Router } = express;

const router = new Router();

router.get("/", (req, res) => {
  res.send("Hola soy el root de productos");
});

router.get("/all", (req, res) => {
  res.send("Todos los productos");
});

module.exports = router;
