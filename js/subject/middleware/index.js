const express = require("express");
const app = express();
const port = 3000;
const morgan = require("morgan");
const AppError = require("./AppError");

app.use(morgan("dev"));

const verifyPass = (req, res, next) => {
  const { password } = req.query;
  if (password === "Nicolaas") {
    next();
  }
  // res.send("Sorry you didnt match the password");
  throw new AppError("Password Required", 401);
};

app.get("/", (req, res) => {
  res.send("homepage");
});

app.get("/error", (req, res) => {
  chicken.fur();
});

app.get("/dogs", (req, res) => {
  res.send("WOOF WOOF");
});

app.get("/secret", verifyPass, (req, res) => {
  res.send("HELLO THERE YOU THE CHOSEN ONE");
});

app.get("/admin", (req, res) => {
  throw new AppError("You are not an admin", 403);
});

app.use((err, req, res, next) => {
  const { message, status } = err; //ERROR HANDLER
  res.status(status).send(message);
});

app.use((req, res) => {
  res.status(404).send("NOT FOUND"); // 404 NOT FOUND
});

// app.use((err, req, res, next) => {
//   console.log("ERROR!");
//   res.status(500).send("ERROR BRO");
// });

app.listen(port, () => {
  console.log("PORT " + port);
});
