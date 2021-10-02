const express = require("express");
const router = express.Router({ mergeParams: true });

const catchAsync = require("../utils/catchAsync");
const expressError = require("../utils/ExpressError");
const methodOverride = require("method-override");
const Joi = require("joi");

const Campground = require("../Models/campground");
const Review = require("../Models/review");

router.post(
  "/",
  catchAsync(async (req, res) => {
    // BUAT DI FILE TERPISAH SCHEMA NYA!
    const reviewSchema = Joi.object({
      review: Joi.object({
        rating: Joi.number().required().min(0).max(5),
        body: Joi.string().required(),
      }).required(),
    });
    const { error } = reviewSchema.validate(req.body);
    if (error) {
      const msg = error.details.map((el) => el.message);
      throw new expressError(msg, 400); // 400 ITU CLIENT ERROR
    }
    const campground = await Campground.findById(req.params.id);
    const review = new Review(req.body.review);
    console.log(review);
    console.log(campground.reviews);
    campground.reviews.push(review);
    await review.save();
    await campground.save();
    res.redirect(`/campgrounds/${campground._id}`);
  })
);

router.delete("/:reviewId", async (req, res) => {
  const { reviewId, id } = req.params;
  await Campground.findByIdAndUpdate(id, { $pull: { reviews: reviewId } }); //MENGUPDATE DB CAMPGROUND KARNA REVIEWNYA SUDAH DI HAPUS
  await Review.findByIdAndDelete(reviewId);
  res.redirect(`/campgrounds/${id}`);
});

module.exports = router;
