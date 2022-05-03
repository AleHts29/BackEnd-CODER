const express = require("express");
const session = require("express-session");
const app = express();

app.use(
  session({
    secret: "misecreto",
    resave: true,
    saveUninitialized: true,
  })
);

// FUNCION AUTH
function auth(req, res, next) {
  if (req.session.user === "Alejandro" && req.session.admin) next();

  return res.status(401).send("Error: usuario no autorizado");
}
// LOGIN
app.get("/", (req, res) => {
  res.send({ session: req.session });
});
app.get("/login", (req, res) => {
  let { username, password } = req.query;

  if (username !== "Alejandro" || password !== "12345") {
    return res.send("login Failed");
  }

  req.session.user = username;
  req.session.admin = true;

  res.send("Loging success!");
  //   res.redirect("/privada");
});

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) console.log("Error in Logout");

    res.send("Logout Ok!");
  });
});

app.get("/privada", auth, (req, res) => {
  res.send("Si estas aca, es porque estas autorizado!");
});

// --------- //

// SESIONES DE USUARIO EN SERVER
/*
Realizar un programa de backend que establezca sesiones de usuarios en el
servidor.
Cuando un cliente visita el sitio por primera vez en la ruta 'root', se presentará el
mensaje de “Te damos la bienvenida”.
Con los siguientes request de ese mismo usuario, deberá aparecer el número de
visitas efectuadas. El cliente podrá ingresar por query params el nombre, en cuyo
caso se añadirá a los mensajes devuelto.
Por ejemplo: “Bienvenido Juan” o “Juan visitaste la página 3 veces”. Ese nombre
sólo se almacenará la primera vez que el cliente visite el sitio

Se dispondrá de una ruta 'olvidar' que permita reiniciar el proceso de visitas para el
usuario.
En caso de que no haya error, se retornará el mensaje “Hasta luego” más el nombre
del cliente (de existir); caso contrario un objeto con el siguiente formato: { error :
descripción }.
Luego de requerir esa ruta, el efecto será como el de visitar el sitio por primera vez.
NOTA1: Utilizar el middleware express como estructura de servidor.
NOTA2: Generar los request con varios navegadores (Chrome, edge, Firefox) para simular
los distintos clientes en forma local
*/

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
  console.log("Server OK!");
});
