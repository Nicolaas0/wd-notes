const express = require("express");
const app = express();
const port = 3000;
const path = require("path");
const ejsMate = require("ejs-mate");
const mongoose = require("mongoose");
const session = require("express-session");
const flash = require('connect-flash')

const methodOverride = require("method-override");

const expressError = require("./utils/ExpressError");

const campgroundsRouter = require("./routes/campgrounds");
const reviewRouter = require("./routes/reviews");

mongoose.connect("mongodb://localhost:27017/yelp-camp", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on("error", console.error.bind(console, "connection error:"));
db.once("open", () => {
  console.log("Database connected");
});

app.engine("ejs", ejsMate);

app.set("views", path.join(__dirname, "views"));
app.set(express.static(path.join(__dirname, "public")));
app.set("view engine", "ejs");

const sessionConfig = {
  secret: "aabbccddeeff",
  resave: false,
  saveUninitialized: true,
  cookie: {
    httpOnly: true,
    expires: Date.now() + 1000 * 60 * 60 * 24 * 7,
    maxAge: 1000 * 60 * 60 * 24 * 7,
  },
};

app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use("/campgrounds", campgroundsRouter);
app.use("/campgrounds/:id/reviews/", reviewRouter);
app.use(session(sessionConfig));
app.use(flash())

app.get("/", (req, res) => {
  res.render("home");
});

app.all("*", (req, res, next) => {
  next(new expressError("Page not found", 404)); //UNTUK 404 NOTFOUND
});

app.use((error, req, res, next) => {
  const { message = "Something went wrong", statusCode = "500" } = error; // ERROR HANDLER
  res.status(statusCode).render("error", { error });
});

app.listen(port, () => {
  console.log("PORT " + port);
});
