const express = require("express");
const multer = require("multer");
// const emoji = require("emoji-express");

const app = express();

const port = 4002;

// confi Multer --> doinde guardo archivos
let storage = multer.diskStorage({
  destination: function (req, file, cb) {
    // "update" es la ruta donde voy a guardar mis archivos
    cb(null, "update");
  },

  // Nombre con el que quiero que se guraden mis archivos
  filename: function (req, file, cb) {
    cb(null, "coder_" + file.originalname);
  },
});

// creo un middleware
let update = multer({ storage });

// El metodo single me permite solo un archivo --> Existen otro metodo para subir multiples archivos.
app.post("/", update.single("myFile"), (req, res) => {
  console.log(req.file);
  res.send("Hi!");
});

app.listen(port, () => {
  console.log("🚀 - Server is run on port " + port);
});
