const mongoose = require("mongoose");
const Schema = mongoose.Schema;
const Review = require("./review");

const CampgroundSchema = new Schema({
  title: String,
  price: Number,
  desc: String,
  location: String,
  image: String,
  description: String,
  reviews: [{
    type: mongoose.Schema.Types.ObjectId,
    ref:'Review'
  }],
});

CampgroundSchema.post("findOneAndDelete", async function (doc) {
  if (doc) {
    await Review.deleteMany({
      _id: {
        $in: doc.reviews,
      },
    });
  }
});


module.exports = mongoose.model("Campground", CampgroundSchema);
