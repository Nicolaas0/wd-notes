const express = require("express");
const app = express();
const path = require("path");
const mongoose = require("mongoose");
const { json } = require("express");
const methodOverride = require("method-override");
const Product = require("./models/product");
const AppError = require("./AppError");

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

app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(json()); //parsing the body from json to text.
app.set("view engine", "ejs");
app.use(methodOverride("_method"));

app.get("/products", async (req, res) => {
  const products = await Product.find({});
  res.render("index", { products });
});

app.get("/products/new", (req, res) => {
  //GET REQUEST
  res.render("new");
});

app.post("/products", async (req, res) => {
  const newProduct = new Product(req.body);
  await newProduct.save();
  console.log(newProduct);
  res.redirect(`/products/${newProduct._id}`);
});

app.get("/products/:id", async (req, res, next) => {
  try {
    const { id } = req.params;
    const product = await Product.findById(id);
    if (!product) {
      next(new AppError("Data is unavailable", 500));
    }
    console.log(product);
    res.render("details", { product });
  } catch (e) {
    next(e);
  }
});

app.get("/products/:id/edit", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("update", { product });
});

app.post("/products/:id", async (req, res) => {
  const { id } = req.params;
  const newProduct = new Product(req.body);
  await newProduct.updateOne();
  console.log(newProduct);
  res.redirect(`/products/${newProduct._id}`);
});

app.put("/products/:id", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findOneAndUpdate(id, req.body, {
    runValidator: true,
    new: true,
  });
  res.redirect(`/products/${product._id}`);
});

app.use((err, req, res, next) => {
  const { message, status = 500 } = err;
  res.status(status).send(message);
});

app.listen(3000, () => {
  console.log("APP IS ON PORT 3000");
});
