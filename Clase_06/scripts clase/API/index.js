const express = require("express");

const app = express();

app.get("/", (req, res) => {
  res.sendStatus(200).send();
});

app.get("/api", (req, res) => {
  res.send("Hola mundo desde api");
});

app.listen(3002, () => {
  console.log("Server run pno port 3002");
});
