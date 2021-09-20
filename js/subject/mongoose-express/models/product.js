const mongoose = require("mongoose");

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  price: {
    type: Number,
    required: true,
    min: 0,
  },
  categories: {
    type: String,
    lowercase: true,
    enum: ["food", "drink", "candy"],
  },
});

const Product = new mongoose.model("Product", productSchema);

module.exports = Product;
