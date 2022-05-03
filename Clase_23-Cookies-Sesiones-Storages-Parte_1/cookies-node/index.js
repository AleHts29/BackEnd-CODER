const express = require("express");
const cookieParse = require("cookie-parser");

const app = express();
// se le pasa un parametro para encriptar
app.use(cookieParse("misecreto"));

app.get("/", (req, res) => {
  res.cookie("user", "Alejandro", { signed: true, maxAge: 2000 });
  res.cookie("address", "CABA", { signed: true });

  res.send("carga cookies");
});

app.get("/getCookies", (req, res) => {
  console.log(req.cookies.user);

  // para saber el secreto
  console.log(req.signedCookies.user);
  res.send("obtengo cookies");
});

// Elinminar cookies
app.get("/deleteCookies", (req, res) => {
  console.log(req.cookies.user);
  res.clearCookie("address").send("eliminar cookies");
});

// ------------ //

// EJERCICIO
/*
Realizar un programa de backend que permita gestionar cookies desde el
frontend. Para ello:
Definir una ruta “createCookies”.
Definir un método GET para crear cookies mediante algunas validaciones
La idea es enviar por query params un usuario, una contraseña y un tiempo en
milisegundos
Validar que usuario y contraseña existen (Validar con nombre y contraseña
seteados manualmente), en caso de que no coincidan deben enviar un mensaje
como este : "No se pudo crear la cookie"

En caso de que sí coincida, se deben crear las cookies correspondientes con los
siguientes nombre:
- Cookie 1 : nombre: valor del nombre pasada en query params
- Cookie 2 : password: valor de la contraseña pasada en query params
Por ultimo, en caso de que el tiempo no venga definido por defecto deben poner
un tiempo de vencimiento de la cookie de 1000 ms para ambas cookies.
*/

app.get("/createCookies", (req, res) => {
  let { name, pass, time } = req.query;

  if (name !== "Alejandro" || pass !== "12345")
    res.send("No se pudo crear la coolkie");

  res.cookie("name", name, { signed: true, maxAge: Number(time) || 1000 });
  res.cookie("password", pass, { signed: true, maxAge: Number(time) || 1000 });

  res.send("Cookies creadas");
});

app.listen(8080, () => {
  console.log("Server OK!");
});
