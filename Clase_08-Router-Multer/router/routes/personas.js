const express = require("express");

const { Router } = express;

const router = new Router();

// ejm.. array
let people = [
  {
    name: "Leonardo",
    lastName: "Torres",
    year: 20,
  },
  {
    name: "Juan",
    lastName: "Cruz",
    year: 30,
  },
];

router.get("/all", (req, res) => {
  res.send({ data: people });
});

router.post("/add", (req, res) => {
  const obj = {
    name: req.body.name,
    lastName: req.body.race,
    year: req.body.year,
  };
  people.push(obj);

  res.send("Se agrego mascota!..");
});

module.exports = router;
