const express = require("express");
const router = express.Router();
const methodOverride = require("method-override");
const Joi = require("joi");

const catchAsync = require("../utils/catchAsync");
const expressError = require("../utils/ExpressError");

const Campground = require("../Models/campground");

router.get("/", async (req, res, next) => {
  const campgrounds = await Campground.find({});
  res.render("campgrounds/index", { campgrounds });
});

router.get("/new", async (req, res) => {
  res.render("campgrounds/new");
});

router.post(
  "/",
  catchAsync(async (req, res, next) => {
    // if (!req.body.campground) throw new expressError("There is no data", 400);
    const campSchema = Joi.object({
      campground: Joi.object({
        title: Joi.string().required(),
        location: Joi.string().required(),
        price: Joi.number().required().min(10),
      }).required,
    });
    const { error } = campSchema.validate(req.body);
    if (error) {
      const msg = error.details.map((el) => el.message);
      throw new expressError(msg, 400);
    }
    const campground = new Campground(req.body.campground);
    await campground.save();
    res.redirect(`//${campground.id}`);
  })
);

router.delete("/:id", async (req, res) => {
  const { id } = req.params;
  await Campground.findByIdAndDelete(id);
  res.redirect("/");
});

router.get("/:id/edit", async (req, res) => {
  const campgrounds = await Campground.findById(req.params.id);
  res.render("campgrounds/update", { campgrounds });
});

router.get(
  "/:id",
  catchAsync(async (req, res) => {
    const campgrounds = await Campground.findById(req.params.id).populate(
      "reviews"
    );
    res.render("campgrounds/show", { campgrounds });
  })
);

router.put("/:id", async (req, res) => {
  const { id } = req.params;
  const campgrounds = await Campground.findByIdAndUpdate(id, {
    ...req.body.campground,
  });
  res.redirect(`/${campgrounds._id}`);
});

module.exports = router;
