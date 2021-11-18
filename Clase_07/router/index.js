const express = require("express");

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

const port = 3003;

const productsRoutes = require("./routes/productos");
const categoriesRoutes = require("./routes/categories");
const petsRoutes = require("./routes/mascotas");
const peopleRoutes = require("./routes/personas");

// Middleware o lógica de intercambio de información entre aplicaciones
// Routes
app.use("/products", productsRoutes);
app.use("/categories", categoriesRoutes);
app.use("/api/pets", petsRoutes);
app.use("/api/people", peopleRoutes);

app.listen(port, () => {
  console.log("server run on  port " + port);
});
