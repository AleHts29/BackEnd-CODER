const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

let arr = [];

const port = 3006;

// Static files
// esto no se usa
app.use("/static", express.static(__dirname + "/public")); //  __dirname --> ruta absoluta

// como se debe configurar reealmente
app.get("/", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

app.get("/form", (req, res) => {
  res.sendFile(__dirname + "/public/form.html");
});

app.post("/", (req, res) => {
  arr.push(req.body);
  res.send("formulario enviado");
});

app.get("/getForm", (req, res) => {
  res.send({ data: arr });
});

app.listen(port, () => {
  console.log("server run on  port " + port);
});
