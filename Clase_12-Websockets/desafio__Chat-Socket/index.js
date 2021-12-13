const express = require("express");
const moment = require("moment");
// let arr = require("./data/index");

const app = express();
const port = process.env.PORT || 8084;

// Fecha
let date = moment().format("DD/MM/YYYY hh:mm:ss");

// set HTTP
const http = require("http");
const server = http.createServer(app);

const productsRoutes = require("./routes/products");
const crudRoutes = require("./routes/newProducts");
const auxProduct = require("./src/data/newProducts");

let msn = [];

// set Socket
const { Server } = require("socket.io");
const io = new Server(server);

// set Motor de plantillas
app.set("view engine", "ejs");
app.set("views", "./views");

// midleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "/public"));

// Socket connection
io.on("connection", (socket) => {
  console.log("Cliente conectado!..");

  // se envia lista de los items nuevos
  if (auxProduct) {
    io.sockets.emit("message_back", auxProduct);
  }
  if (msn) {
    io.sockets.emit("chat_back", msn);
  }
  // mensaje del cliente cuando envia un nuevo item desde New items
  socket.on("message_client", (data) => {
    console.log(data);
  });

  // escucha cliente alta de productos
  socket.on("dataProduct", (data) => {
    auxProduct.push(data);
    console.log(auxProduct);
    // le responde a todos los usuarios conectados a New items
    io.sockets.emit("message_back", auxProduct);
  });

  // escuchar chat cliente
  socket.on("dataMsn", (data) => {
    data.date = date;
    msn.push(data);
    console.log(msn);

    // Coneccion Chat con socket
    io.sockets.emit("chat_back", msn);
  });

  // io.sockets.emit("message_back", "soy el back!!..");
});

app.use("/api/products", productsRoutes);
app.use("/newitem", crudRoutes);

app.get("/", (req, res) => {
  res.render("index.ejs");
});

server.listen(port, () => {
  console.log(`🚀 Server run on port ${port}`);
});
