const mongoose = require("mongoose");

const Product = require("./models/product");

mongoose
  .connect("mongodb://localhost:27017/farmStand", {
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
    name: "Watermelon",
    price: 100,
    season: "Spring",
  },
  {
    name: "Tomato",
    price: 20,
    season: "Spring",
  },
  {
    name: "Potato",
    price: 40,
    season: "Spring",
  },
  {
    name: "Ginger",
    price: 20,
    season: "Fall",
  },
  {
    name: "Strawberry",
    price: 70,
    season: "Spring",
  },
  {
    name: "Blueberry",
    price: 75,
    season: "Spring",
  },
  {
    name: "Cranberry",
    price: 80,
    season: "Spring",
  },
];

Product.insertMany(foodsList)
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
