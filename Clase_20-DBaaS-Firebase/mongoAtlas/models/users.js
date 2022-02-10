const { Schema, model } = require("mongoose");

const productSchema = new Schema({
  nombre: {
    type: String,
    required: true,
  },
  apellido: {
    type: String,
    required: true,
  },
  dni: {
    type: String,
    required: true,
    unique: true,
  },
});

module.exports = model("user", productSchema);
