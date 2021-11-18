const express = require("express");

const { Router } = express;

const router = new Router();

// ejm.. array
let pets = [
  {
    name: "Homero",
    race: "waimaraner",
    year: "1.4 año",
  },
  {
    name: "Dante",
    race: "dachshund",
    year: "1 año",
  },
];

router.get("/all", (req, res) => {
  res.send({ data: pets });
});

router.post("/add", (req, res) => {
  pets.push(req.body);

  res.send("Se agrego mascota!..");
});

module.exports = router;
