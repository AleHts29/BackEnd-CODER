const express = require("express");
const {
  getAllUsers,
  getUserById,
  createUser,
} = require("../controllers/user.controllers");

const { Router } = express;

const router = new Router();

// A estos endpoits les vamos a realizar pruebas de comportamiento.
/*
Vamos a segir usando Mocha --> porque necesitamos asert

pero adicional vamos a instalar.
- chai 
- superTest

*/
router.get("/users", getAllUsers);
router.get("/users/:id", getUserById);
router.post("/users", createUser);

module.exports = router;
