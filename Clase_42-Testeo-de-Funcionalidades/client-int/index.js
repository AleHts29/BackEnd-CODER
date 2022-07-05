// https://jsonplaceholder.typicode.com/todos
// para el http --> puerto 80
// para el https --> puerto 443

const http = require("http");
const https = require("https");

// console.log(https);

const url = "jsonplaceholder.typicode.com";

const option = {
  hostname: url,
  port: 443,
  path: "/todos",
  method: "GET",
};

const request = https.request(option, (response) => {
  let data = "";
  response.on("data", (chunk) => {
    data += chunk.toString();
  });

  response.on("end", () => {
    const body = JSON.parse(data);
    console.log(body);
  });
});

request.on("error", (error) => {
  console.log("Error:", error);
});

request.end();

// Ya tenemos librerias que hacen esto de una forma mas sencilla
// http es un modulo nativo muy viejo de JS
