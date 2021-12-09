const express = require("express");

const app = express();
const http = require("http");
const server = http.createServer(app);
const io = require("socket.io")(server);

const port = 8082;

let msn = [];

// Configurar cliente
app.use(express.static(__dirname + "/public"));

app.get("/api", (req, res) => {
  res.sendFile(__dirname + "/public/index.html");
});

// Web Socket
io.on("connection", (socket) => {
  console.log("Cliente conectado");

  socket.on("message_back", (data) => {
    console.log(data);
  });

  // recibo data desde el cliente..
  socket.on("msn_client", (data) => {
    console.log(data);
    msn.push(data);

    // envio data hacia el cliente
    socket.emit("menssage_client", msn);
  });
});

server.listen(port, () => {
  console.log("🚀 Server run on port " + port);
});
