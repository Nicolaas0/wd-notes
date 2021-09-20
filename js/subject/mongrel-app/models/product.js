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
  season: {
    type: String,
    enum: ["Fall", "Summer", "Winter", "Spring"],
  },
  farm: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "Farm",
  },
});

const Product = new mongoose.model("Product", productSchema);

module.exports = Product;
