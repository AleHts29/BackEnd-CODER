const express = require("express");
const routerProduct = require("./src/routes/products.Route");
const app = express();

app.use(express.json());
app.use("/api", routerProduct);

app.listen(8080, () => {
  console.log("Server Ok!");
});
