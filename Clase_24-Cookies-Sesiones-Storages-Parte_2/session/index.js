const express = require("express");
const session = require("express-session");
const FileStore = require("session-file-store")(session);

const app = express();

app.use(
  session({
    store: new FileStore({ path: "./session", ttl: 3000 }),
    secret: "misecreto",
    resave: true,
    saveUninitialized: true,
    cookie: {
      maxAge: 3000,
    },
  })
);

app.get("/", (req, res) => {
  req.session.user = "Alejandro";
  req.session.pass = "12345";
  res.send("Se crea la session!");
});

app.get("/count", (req, res) => {
  if (req.session.count) {
    let count = req.session.count++;
    let userName = req.session.user;
    res.send(`Hola ${userName}, haz ingresado ${count} veces!`);
  }
  req.session.count = 1;
  res.send("Bienvenido");
});

app.listen(8080, () => {
  console.log("Server ok!");
});
