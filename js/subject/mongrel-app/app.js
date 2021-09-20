const mongoose = require("mongoose");
const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const { json } = require("express");
const methodOverride = require("method-override");
const Product = require("./models/product");
const Farm = require("./models/farm");

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

app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: true }));
app.use(json()); //parsing the body from json to text.
app.set("view engine", "ejs");
app.use(methodOverride("_method"));

// FARM ROUTER
app.get("/farms", async (req, res) => {
  const farms = await Farm.find({});
  res.render("farm/index", { farms });
});

app.get("/farms/new", async (req, res) => {
  const farms = await Farm.find({});
  res.render("farm/new", { farms });
});

app.get("/farms/:id", async (req, res) => {
  const { id } = req.params;
  const farm = await Farm.findById(id).populate("products");
  res.render("farm/details", { farm });
});

app.post("/farms", async (req, res) => {
  const newFarm = new Farm(req.body);
  await newFarm.save();
  res.redirect(`/farms/${newFarm._id}`);
});

app.get("/farms/:id/products/new", async (req, res) => {
  const { id } = req.params;
  res.render("product/new", { id });
});

app.post("/farms/:id/products", async (req, res) => {
  const { id } = req.params;
  const farm = await Farm.findById(id);
  const { name, price, season } = req.body;
  const product = new Product({ name, price, season });
  farm.products.push(product);
  product.farm = farm;
  await farm.save();
  await product.save();
  res.redirect(`/farms/${farm._id}/`);
});

app.delete("farms/:id/", async (req, res) => {
  const farm = Farm.findByIdAndDelete(req.params.id);
  res.redirect("/farms");
});

// PRODUCT ROUTER
app.get("/products", async (req, res) => {
  const products = await Product.find({});
  res.render("product/index", { products });
});

app.get("/products/new", (req, res) => {
  //GET REQUEST
  res.render("product/new");
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
    res.render("product/details", { product });
  } catch (e) {
    next(e);
  }
});

app.get("/products/:id/edit", async (req, res) => {
  const { id } = req.params;
  const product = await Product.findById(id);
  res.render("product/update", { product });
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

app.listen(port, () => {
  console.log("PORT " + port);
});
