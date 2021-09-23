const express = require("express");
const app = express();
const port = 3000;
const cookieParser = require("cookie-parser");

app.use(cookieParser("thisismysecret"));

app.get("/fufu", (req, res) => {
  const { name } = req.cookies;
  res.cookie("name", "susan");
  res.send("Hey there," + name);
  console.log(req.cookies);
});

app.get("/signedCookies", (req, res) => {
  res.cookie("food", "hamburger", { signed: true });
  res.send(req.signedCookies);
});

app.listen(3000, () => {
  console.log("ON PORT 3000");
});
