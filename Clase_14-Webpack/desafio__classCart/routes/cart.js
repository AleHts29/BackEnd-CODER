const express = require("express");
const ClassContainer = require("../src/utils/container.js");

const { Router } = express;
const router = new Router();
const Container = new ClassContainer("./src/data/products.txt");

router.use(express.json());
router.use(express.urlencoded({ extended: false }));

// Logica
router.get("/", async (req, res) => {
  res.send("Soy el carrito");
});

module.exports = router;
