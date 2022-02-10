const { Schema, model } = require("mongoose");

// Model
const productSchema = new Schema({
  name: {
    type: String,
    required: true,
  },
  price: Number,
});

module.exports = model("product", productSchema);
