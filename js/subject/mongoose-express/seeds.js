const mongoose = require("mongoose");

const Product = require("./models/product");

mongoose
  .connect("mongodb://localhost:27017/foodsApp", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("DATABASE CONNECTED!");
  })
  .catch((err) => {
    console.log("ERROR");
    console.log(err);
  });

// const p = new Product({
//   name: "Fried Chicken",
//   price: 200,
//   categories: "food",
// });
// p.save()
//   .then((p) => console.log(p))
//   .catch((err) => console.log(err));

const foodsList = [
  {
    name: "Ice Cream",
    price: 100,
    categories: "food",
  },
  {
    name: "Beef Stew",
    price: 250,
    categories: "food",
  },
  {
    name: "Coca Cola",
    price: 50,
    categories: "drink",
  },
  {
    name: "Snickers",
    price: 100,
    categories: "candy",
  },
  {
    name: "Yupi",
    price: 50,
    categories: "candy",
  },
];

Product.insertMany(foodsList)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
