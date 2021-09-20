const mongoose = require("mongoose");
const Schema = mongoose.Schema;
mongoose
  .connect("mongodb://localhost:27017/RelationshipDemo", {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => {
    console.log("Database Connected");
  })
  .catch((err) => {
    console.log("ERROR");
    console.log(err);
  });

const productSchema = mongoose.Schema({
  name: String,
  price: Number,
  season: {
    type: String,
    enum: ["Winter", "Spring", "Fall", "Summer"],
  },
});

const farmSchema = mongoose.Schema({
  name: String,
  city: String,
  products: [{ type: Schema.Types.ObjectId, ref: "Product" }],
});

const Product = mongoose.model("Product", productSchema);
const Farm = mongoose.model("Farm", farmSchema);

const newFarm = async () => {
  const f = new Farm({
    name: "Nico Farm",
    city: "Bogor",
  });
  const p = await Product.findOne({ name: "Watermelon" });
  f.products.push(p);
  f.save();
  console.log(f);
};

const addProducts = async () => {
  const f = await Farm.findOne({ name: "Nico Farm" });
  const p = await Product.findOne({ name: "Peach" });
  f.products.push(p);
  await f.save();
  console.log(f);
};

addProducts();

// Product.insertMany([
//   { name: "Watermelon", price: 100, season: "Spring" },
//   { name: "Peach", price: 50, season: "Summer" },
//   { name: "Apple", price: 100, season: "Fall" }
// ]);
