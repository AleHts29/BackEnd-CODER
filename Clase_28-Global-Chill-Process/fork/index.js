const express = require("express");
const { fork } = require("child_process");

const app = express();

/* 
 - Creamos una funcion que va a generar el bloqueo.
 - Esta funcion va a ejecutar millones de operaciones 
 - que express y node los van a procesar pero se va a demorar un monton 
 - 30s 20s son tiempos gigantes de esperar
*/

let visitas = 0;

// // Funcion bloqueante
// const calculo = () => {
//   let suma = 0;

//   for (let i = 0; i < 5e9; i++) {
//     suma += i;
//   }
//   return suma;
// };

// app.get("/calculo", (req, res) => {
//   let sum = calculo();
//   res.send("La suma es: " + sum);
// });

app.get("/calculo", (req, res) => {
  //   let sum = calculo();
  const newHilo = fork("./calculo");
  newHilo.send("start");

  newHilo.on("message", (sum) => {
    res.send("La suma es: " + sum);
  });
});

app.get("/", (req, res) => {
  visitas++;
  res.send("Numero de visitas: " + visitas);
});

app.listen(8080, () => {
  console.log("Server ok!");
});
