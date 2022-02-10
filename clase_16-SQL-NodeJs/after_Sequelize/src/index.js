const express = require("express");
const user = require("./db");

const app = express();

app.use(express.json());

app.get("/", async (req, res) => {
  const users = await user.findAll();
  res.json(users);
});

app.post("/", async (req, res) => {
  let data = {
    name: req.body.name,
    email: req.body.email,
    password: req.body.password,
  };
  const userCreate = await user.create({
    name: data.name,
    email: data.email,
    password: data.password,
  });
  res.json({
    message: "guardado",
    data: userCreate,
  });
});

app.listen(8080, () => {
  console.log("Server Ok!..");
});
