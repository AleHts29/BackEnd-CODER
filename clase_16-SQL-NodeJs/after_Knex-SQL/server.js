const express = require("express");
const morgan = require("morgan");
const PORT = 8084;

const app = express();

const vehicles = require("./routes/vehiclesRoutes");

app.use(morgan("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/vehicles", vehicles);

app.listen(PORT, () => {
  console.log(`Server Ok!.. PORT: ${PORT}`);
});

module.exports = app;
