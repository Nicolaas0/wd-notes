const mongoose = require("mongoose");
mongoose
  .connect("mongodb://localhost:27017/moviesApp", {
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

const moviesSchema = new mongoose.Schema({
  title: String,
  year: Number,
  rating: String,
  score: Number,
});

const Movies = mongoose.model("Movies", moviesSchema);

// const DOTS = new Movies({ title: "DOTS", year: 2015, rating: "M", score: 10 });

// Movies.insertMany([
//   { title: "Good Doctor", year: 2014, score: 7.5, rating: "R" },
//   { title: "Crash Landing On You", year: 2019, score: 9.0, rating: "M" },
//   { title: "While You Were Sleeping", year: 2018, score: 8.0, rating: "A" },
//   { title: "Parasite", year: 2018, score: 8.5, rating: "R" },
// ]);
