const express = require("express");
// let arr = require("./data/index");
const productsRoutes = require("./routes/products");

const app = express();
const port = 8090;

// seteo el motro de plantillas
app.set("view engine", "ejs");
app.set("views", "./views");

// midleware
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/static", express.static(__dirname + "/public"));

app.use("/api/products", productsRoutes);

app.get("/", (req, res) => {
  res.render("index");
});

app.get("/form", (req, res) => {
  res.render("form");
});

app.listen(port, () => {
  console.log(`🚀 Server run on port ${port}`);
});
