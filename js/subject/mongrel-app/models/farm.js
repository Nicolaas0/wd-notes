const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const farmSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Farm must have a name!"],
  },
  city: {
    type: String,
  },
  email: {
    type: String,
    required: [true, "Email required"],
  },
  products: [{
    type: Schema.Types.ObjectId,
    ref: "Product",
  }],
});

const Farm = new mongoose.model("Farm", farmSchema);

module.exports = Farm;
