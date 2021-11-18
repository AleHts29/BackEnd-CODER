const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3004;

app.get("/", (req, res) => {
  res.send("Hi!!");
});

app.listen(port, () => {
  console.log("server run on  port " + port);
});
