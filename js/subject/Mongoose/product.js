const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/product", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("connected!");
  })
  .catch((err) => {
    console.log("ERROR");
    console.log(err);
  });

const productSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    lowercase: true,
    maxlength: 20,
  },
  price: {
    type: Number,
    required: true,
  },
  isAvailable: {
    type: Boolean,
    default: false,
  },
});

const drinkSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    maxLength: [20, "Dont type it too long"],
  },
  price: {
    type: Number,
    required: true,
  },
  isAvailable: {
    type: Boolean,
    required: true,
  },
});
productSchema.methods.greet = function () {
  console.log(`Found the ${this.name}`);
};

productSchema.methods.changePrice = function () {
  this.price = this.price + 100;
  return this.save();
};

const Food = mongoose.model("Food", productSchema);
const Drink = mongoose.model("Drink", drinkSchema);

const findProduct = async () => {
  const foundProduct = await Food.findOne({ name: "Hamburger" });
  console.log(foundProduct);
  await foundProduct.changePrice();
  console.log(foundProduct);
};

findProduct();

const hamburger = new Food({
  name: "Hamburger",
  price: 300,
  isAvailable: true,
});

const cola = new Drink({
  name: "Cola",
  price: 400,
  isAvailable: true,
});

cola
  .save()
  .then((data) => {
    console.log("IT WORKED!");
    console.log(data);
  })
  .catch((err) => {
    console.log("ERROR!");
    console.log(err);
  });

hamburger
  .save()
  .then((data) => {
    console.log("IT WORKED!");
    console.log(data);
  })
  .catch((err) => {
    console.log("ERROR!");
    console.log(err);
  });
