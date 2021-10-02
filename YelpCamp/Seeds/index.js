const mongoose = require("mongoose");
const Campground = require("../Models/campground");
const cities = require("../Seeds/cities");
const { descriptors, places } = require("../Seeds/seedHelpers");

mongoose.connect("mongodb://localhost:27017/yelp-camp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

const sample = (array) => array[Math.floor(Math.random() * array.length)];

const seedDB = async () => {
  await Campground.deleteMany({});
  for (let i = 0; i < 50; i++) {
    const random = Math.floor(Math.random() * 1000);
    const price = Math.floor(Math.random() * 30 + 10);
    const camp = new Campground({
      location: `${cities[random].city}, ${cities[random].state}`,
      title: `${sample(descriptors)} ${sample(places)}`,
      price: price,
      image: `https://source.unsplash.com/collection/483251`,
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer non facilisis eros, imperdiet porttitor tellus.",
    });
    await camp.save();
  }
};

seedDB();
