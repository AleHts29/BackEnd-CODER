const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const productsRoutes = require("./routes/products");
const port = 8080;

// Middleware o lógica de intercambio de información entre aplicaciones
// Routes
app.use("/api/products", productsRoutes);

app.listen(port, () => {
  console.log("server run on port " + port);
});
